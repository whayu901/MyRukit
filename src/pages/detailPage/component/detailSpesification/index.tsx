import React, { memo } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface SpesificationProps {
  species: string | undefined;
  gender: string | undefined;
  status: string | undefined;
}

const DetailSpesification: React.FC<SpesificationProps> = ({
  species,
  status,
  gender,
}) => {
  return (
    <View style={styles.containerSpesification}>
      <View style={styles.rowSection}>
        <Text style={styles.titleText}>spesies:</Text>
        <Text style={styles.valueText}>{species}</Text>
      </View>
      <View style={styles.rowSection}>
        <Text style={styles.titleText}>gender:</Text>
        <Text style={styles.valueText}>{gender}</Text>
      </View>
      <View style={styles.rowSection}>
        <Text style={styles.titleText}>status:</Text>
        <Text style={styles.valueText}>{status}</Text>
      </View>
    </View>
  );
};

export default DetailSpesification;
