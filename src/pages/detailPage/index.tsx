import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
import { Layout, Header, ShimmerDetail } from "@component-moleculs";

import { useDetail } from "./logic/useDetail";
import { DetailSpesification, ItemDetail } from "./component";
import styles from "./styles";

const DetailPage = ({ navigation, route }) => {
  const { dataDetail, loading, title, _goBackNavigate, _onScroll } = useDetail({
    navigation,
    route,
  });

  const _renderItem = ({ item, index }: { item: any; index: number }) => {
    return <ItemDetail item={item} indexItem={index} />;
  };

  return (
    <Layout statusBarStyle="light-content">
      <Header isDetail title={title} onPressGoBack={_goBackNavigate} />

      {loading ? (
        <>
          <ShimmerDetail />
          <View style={styles.lineBottom} />
        </>
      ) : (
        <ScrollView onScroll={_onScroll}>
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

            <Animated.View>
              <Text style={styles.nameText}>Episode</Text>
            </Animated.View>

            <View>
              <FlatList
                data={dataDetail?.episode}
                renderItem={_renderItem}
                scrollEnabled={false}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </Layout>
  );
};

export default DetailPage;
