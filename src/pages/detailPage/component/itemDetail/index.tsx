import React, { memo } from "react";
import { View, Text } from "react-native";
import moment from "moment";

import { useItemDetail } from "./logic/useItemDetail";
import styles from "./styles";

interface ItemDetailProps {
  item: any;
  indexItem?: number;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const { dataDetailEpisode } = useItemDetail({ item });

  return (
    <View style={styles.containerEpisode}>
      <Text
        style={
          styles.titleEpisodeText
        }>{`${dataDetailEpisode?.name} - ${dataDetailEpisode?.episode}`}</Text>
      <Text style={styles.dateTitleText}>
        {moment(dataDetailEpisode?.created).format("MMMM D, YYYY")}
      </Text>
    </View>
  );
};

export default memo(ItemDetail);
