import { StyleSheet, StatusBar } from "react-native";
import { TYPHOGRAPHY, COLORS } from "@themes";

import { IS_ANDROID, isIphoneX } from "../../../utils";

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: COLORS.purple,
    paddingTop: IS_ANDROID ? StatusBar.currentHeight : isIphoneX() ? 50 : 25,
    paddingBottom: IS_ANDROID ? 10 : 10,
  },
  titleHeader: {
    ...TYPHOGRAPHY.lektonBoldLarge,
    color: COLORS.white,
  },
  containerTitle: {
    marginLeft: 10,
  },
});

export default styles;
