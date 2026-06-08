import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import { Education as EducationType } from "../types";

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Education</Text>
      <View style={styles.divider} />
      {education.map((edu, i) => (
        <View key={i}>
          <View style={styles.eduHeader}>
            <Text style={styles.eduInstitution}>{edu.institution}</Text>
            <Text style={styles.eduDates}>
              {edu.startDate} - {edu.endDate}
            </Text>
          </View>
          <Text style={styles.eduDegree}>{edu.degree}</Text>
        </View>
      ))}
    </View>
  );
}
