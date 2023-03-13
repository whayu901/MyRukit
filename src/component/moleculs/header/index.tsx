import React, { memo, FC } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "@themes";

import styles from "./styles";

interface HeaderProps {
  isDetail?: boolean;
  title?: string;
  onPressGoBack?: () => void;
}

const Header: FC<HeaderProps> = ({ isDetail, onPressGoBack, title }) => {
  return (
    <View style={styles.containerHeader}>
      <StatusBar />

      {isDetail && (
        <View>
          <TouchableOpacity onPress={onPressGoBack}>
            <Ionicons name="arrow-back" color={COLORS.white} size={25} />
          </TouchableOpacity>
        </View>
      )}
      {title && (
        <View style={styles.containerTitle}>
          <Text style={styles.titleHeader}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default memo(Header);
