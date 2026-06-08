import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";

interface SummaryProps {
  text: string;
}

export function Summary({ text }: SummaryProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.summaryText}>{text}</Text>
    </View>
  );
}
