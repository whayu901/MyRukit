import { StyleSheet } from "react-native";
import { TYPHOGRAPHY, COLORS } from "@themes";

const styles = StyleSheet.create({
  containerEpisode: {
    marginVertical: 16,
  },
  titleEpisodeText: {
    ...TYPHOGRAPHY.lektonBoldSemiLarge,
  },
  dateTitleText: {
    ...TYPHOGRAPHY.lektonRegularLight,
    marginTop: 8,
  },
});

export default styles;
