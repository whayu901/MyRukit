import { StyleSheet } from "react-native";
import { COLORS, TYPHOGRAPHY } from "@themes";

const styles = StyleSheet.create({
  containerItem: {
    padding: 10,
    flexDirection: "row",
  },
  title: {
    ...TYPHOGRAPHY.lektonBoldSemiLarge,
    color: COLORS.black,
  },
  subtitle: {
    ...TYPHOGRAPHY.lektonRegularLight,
    color: COLORS.black,
    paddingTop: 8,
  },
  imageItem: {
    width: 40,
    height: 40,
  },
  containerText: {
    paddingLeft: 16,
  },
});

export default styles;
