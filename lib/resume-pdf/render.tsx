import { renderToBuffer } from "@react-pdf/renderer";
import { ResumePDF } from "./ResumePDF";
import { ResumeData } from "./types";

export async function renderResumePDF(data: ResumeData): Promise<Buffer> {
  return await renderToBuffer(<ResumePDF data={data} />);
}
