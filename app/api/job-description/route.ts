import { NextRequest } from "next/server";
import { renderResumePDF } from "@/lib/resume-pdf/render";
import { demoResumeData } from "@/lib/resume-pdf/demo-data";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { jobDescription } = body;
  console.log(jobDescription);

  console.log("Job description received:", jobDescription);

  // TODO: replace demoResumeData with LLM-generated ResumeData derived from jobDescription
  const data = demoResumeData;

  console.log(data);

  const pdfBuffer = await renderResumePDF(data);

  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resume.pdf"',
    },
  });
}
