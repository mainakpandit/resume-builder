import { StyleSheet } from "@react-pdf/renderer";

export const colors = {
  black: "#000000",
  darkGray: "#333333",
  midGray: "#555555",
  lightGray: "#888888",
  border: "#000000",
};

export const fonts = {
  heading: "Times-Roman",
  body: "Helvetica",
  bold: "Helvetica-Bold",
};

export const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: colors.black,
    lineHeight: 1.35,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
    marginBottom: 3,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 5,
  },
  // Header
  headerName: {
    fontFamily: "Times-Roman",
    fontSize: 22,
    textAlign: "center",
    letterSpacing: 1,
  },
  headerContact: {
    fontSize: 8.5,
    textAlign: "center",
    color: colors.darkGray,
    marginTop: 16,
  },
  // Summary
  summaryText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.darkGray,
  },
  // Skills
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    width: 130,
    flexShrink: 0,
  },
  skillValue: {
    fontSize: 9,
    flex: 1,
    color: colors.darkGray,
  },
  // Experience
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  jobCompany: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
  },
  jobDates: {
    fontSize: 9,
    color: colors.darkGray,
  },
  jobTitle: {
    fontFamily: "Helvetica-BoldOblique",
    fontSize: 9,
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDot: {
    width: 10,
    fontSize: 9,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.45,
    color: colors.darkGray,
  },
  jobEntry: {
    marginBottom: 8,
  },
  // Education
  eduHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eduInstitution: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
  },
  eduDates: {
    fontSize: 9,
    color: colors.darkGray,
  },
  eduDegree: {
    fontSize: 9,
    fontFamily: "Helvetica-BoldOblique",
  },
});
