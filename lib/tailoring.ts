import Anthropic from "@anthropic-ai/sdk";
import fs from "fs/promises";
import path from "path";
import { resumeDataSchema } from "./resume-pdf/schema";
import type { ResumeData } from "./resume-pdf/types";

const client = new Anthropic({
  apiKey: process.env.MODEL_API_KEY,
});

export async function tailorResume(
  jobDescription: string,
): Promise<ResumeData> {
  console.log("Tailoring resume for job description:", jobDescription);
  const resumePath = path.join(process.cwd(), "resume.md");
  const resumeContent = await fs.readFile(resumePath, "utf-8");

  try {
    const model = process.env.MODEL_NAME;

    if (!model) {
      throw new Error("ANHTROPIC_MODEL environment variable is not set");
    }

    const message = await client.messages.create({
      model,
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: buildPrompt(jobDescription, resumeContent),
        },
      ],
    });

    const textBlock = message.content.find((block) => block.type === "text");

    if (!textBlock || textBlock.type !== "text") {
      throw new Error("LLM returned no text content");
    }

    const rawJson = extractJson(textBlock.text);
    const parsed: unknown = JSON.parse(rawJson);

    return resumeDataSchema.parse(parsed);
  } catch (error) {
    console.error("Error during resume tailoring:", error);
    throw new Error("Failed to tailor resume");
  }
}

function buildPrompt(jobDescription: string, resumeContent: string): string {
  return `You are a professional resume tailoring expert. Analyze the job description and candidate resume below, then return a JSON object that optimizes the resume for this specific role.

<job_description>
${jobDescription}
</job_description>

<resume>
${resumeContent}
</resume>

Return ONLY a raw JSON object with this exact structure — no markdown fences, no explanation:
{
  "name": "string",
  "contact": {
    "email": "string",
    "phone": "string",
    "linkedin": "string",
    "website": "string"
  },
  "summary": "2-3 sentence tailored professional summary",
  "skills": {
    "Category Name": "comma-separated skill list"
  },
  "experience": [
    {
      "company": "string",
      "location": "string",
      "title": "string",
      "startDate": "MM/YYYY",
      "endDate": "MM/YYYY",
      "bullets": ["achievement bullet tailored to the role"]
    }
  ],
  "education": [
    {
      "institution": "string",
      "location": "string",
      "degree": "string",
      "startDate": "MM/YYYY",
      "endDate": "MM/YYYY"
    }
  ]
}

Tailoring guidelines:
- Rewrite bullet points to emphasize the achievements most relevant to this role
- Reorder skills categories and items so the most relevant appear first
- Use keywords and terminology from the job description where factually accurate
- Do not invent or fabricate any information — keep all companies, dates, and facts accurate`;
}

// Handles both raw JSON and JSON wrapped in markdown code fences
function extractJson(text: string): string {
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) return fenceMatch[1].trim();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end !== -1) return text.slice(start, end + 1);
  return text.trim();
}
