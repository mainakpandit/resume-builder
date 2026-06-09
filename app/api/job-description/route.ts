import { NextRequest, NextResponse } from "next/server";
import { renderResumePDF } from "@/lib/resume-pdf/render";
// import { tailorResume } from "@/lib/tailoring";
import { demoResumeData } from "@/lib/resume-pdf/demo-data";

export const runtime = "nodejs";

export async function POST(request: NextRequest): Promise<Response> {
  const body = await request.json();
  const { jobDescription } = body as { jobDescription?: string };

  if (
    !jobDescription ||
    typeof jobDescription !== "string" ||
    jobDescription.trim() === ""
  ) {
    return NextResponse.json(
      { error: "jobDescription is required" },
      { status: 400 },
    );
  }

  try {
    // const data = await tailorResume(jobDescription.trim());
    const data = demoResumeData; // For demonstration purposes
    const pdfBuffer = await renderResumePDF(data);

    return new Response(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Resume tailoring failed:", error);
    return NextResponse.json(
      { error: "Failed to generate tailored resume" },
      { status: 500 },
    );
  }
}
