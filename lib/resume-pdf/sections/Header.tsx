import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import { ContactInfo } from "../types";

interface HeaderProps {
  name: string;
  contact: ContactInfo;
}

export function Header({ name, contact }: HeaderProps) {
  const contactLine = [
    contact.email,
    contact.phone,
    contact.linkedin,
    contact.website,
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <View style={{ marginBottom: 8 }}>
      <View>
        <Text style={styles.headerName}>{name.toUpperCase()}</Text>
      </View>
      <View>
        <Text style={styles.headerContact}>{contactLine}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000000",
          marginTop: 6,
        }}
      />
    </View>
  );
}
