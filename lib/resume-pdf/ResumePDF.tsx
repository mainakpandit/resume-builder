import { Document, Page } from "@react-pdf/renderer";
import { styles } from "./styles";
import { Header } from "./sections/Header";
import { Summary } from "./sections/Summary";
import { Skills } from "./sections/Skills";
import { WorkExperience } from "./sections/WorkExperience";
import { Education } from "./sections/Education";
import { ResumeData } from "./types";

interface ResumePDFProps {
  data: ResumeData;
}

export function ResumePDF({ data }: ResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header name={data.name} contact={data.contact} />
        <Summary text={data.summary} />
        <Skills skills={data.skills} />
        <WorkExperience experience={data.experience} />
        <Education education={data.education} />
      </Page>
    </Document>
  );
}
