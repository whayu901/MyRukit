import { StyleSheet } from "react-native";
import { TYPHOGRAPHY, COLORS } from "@themes";

const styles = StyleSheet.create({
  imageContent: {
    width: "100%",
    height: 375,
  },
  nameText: {
    ...TYPHOGRAPHY.lektonBoldLarge,
    color: COLORS.black,
    marginBottom: 16,
    marginTop: 24,
  },
  containerContent: {
    marginHorizontal: 16,
  },
  containerSpesification: {
    marginBottom: 36,
  },
  lineBottom: {
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    marginHorizontal: 87,
    marginBottom: 36,
  },
});

export default styles;
