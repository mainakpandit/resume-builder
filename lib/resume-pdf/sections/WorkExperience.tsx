import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import { WorkExperience as WorkExperienceType } from "../types";

interface WorkExperienceProps {
  experience: WorkExperienceType[];
}

export function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Work Experience</Text>
      <View style={styles.divider} />
      {experience.map((job, i) => (
        <View key={i} style={styles.jobEntry}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobCompany}>
              {job.company}
              {job.location ? ` | ${job.location}` : ""}
            </Text>
            <Text style={styles.jobDates}>
              {job.startDate} – {job.endDate}
            </Text>
          </View>
          <Text style={styles.jobTitle}>{job.title}</Text>
          {job.bullets.map((bullet, j) => (
            <View key={j} style={styles.bullet}>
              <Text style={styles.bulletDot}>●</Text>
              <Text style={styles.bulletText}>{bullet}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
