import React, { memo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Item } from "@actions/request/types";

import styles from "./styles";

interface ItemProps {
  item: Item;
  indexItem: number;
  onPress: () => void;
}

const ItemRickAndMorty: React.FC<ItemProps> = ({
  item,
  onPress,
  indexItem,
}) => {
  return (
    <TouchableOpacity
      key={indexItem}
      activeOpacity={1}
      onPress={onPress}
      style={styles.containerItem}
    >
      <View>
        <Image
          source={{ uri: item.image }}
          style={styles.imageItem}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ItemRickAndMorty);
