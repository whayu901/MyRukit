import { StyleSheet } from "react-native";
import { TYPHOGRAPHY, COLORS } from "@themes";

const styles = StyleSheet.create({
  containerSpesification: {
    backgroundColor: COLORS.pink,
    borderRadius: 10,
    padding: 10,
  },
  rowSection: {
    flexDirection: "row",
    marginVertical: 5,
  },
  titleText: {
    ...TYPHOGRAPHY.lektonBoldRegular,
    color: COLORS.white,
  },
  valueText: {
    ...TYPHOGRAPHY.lektonRegular,
    color: COLORS.white,
    marginLeft: 10,
  },
});

export default styles;
