import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";

interface SkillsProps {
  skills: Record<string, string>;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.divider} />
      {Object.entries(skills).map(([label, value]) => (
        <View key={label} style={styles.skillRow}>
          <Text style={styles.skillLabel}>{label}:</Text>
          <Text style={styles.skillValue}>{value}</Text>
        </View>
      ))}
    </View>
  );
}
