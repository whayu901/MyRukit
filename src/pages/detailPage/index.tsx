import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Layout, Header } from "@component-moleculs";

import { useDetail } from "./logic/useDetail";
import { DetailSpesification } from "./component";
import styles from "./styles";

const DetailPage = ({ navigation, route }) => {
  const { dataDetail, loading, title, _goBackNavigate } = useDetail({
    navigation,
    route,
  });

  return (
    <Layout statusBarStyle="light-content">
      <Header isDetail title={title} onPressGoBack={_goBackNavigate} />
      <ScrollView>
        <View>
          <Image
            source={{ uri: dataDetail?.image }}
            style={styles.imageContent}
            resizeMode="cover"
          />
        </View>

        <View style={styles.containerContent}>
          <Text style={styles.nameText}>{dataDetail?.name}</Text>

          <View style={styles.containerSpesification}>
            <DetailSpesification
              species={dataDetail?.species}
              status={dataDetail?.status}
              gender={dataDetail?.gender}
            />
          </View>

          <View style={styles.lineBottom} />

          <View>
            <Text style={styles.nameText}>Episode</Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DetailPage;
