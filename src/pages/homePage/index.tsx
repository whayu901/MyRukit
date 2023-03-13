import React from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Item } from "@actions/request/types";
import { Layout, Header, ShimmerList } from "@component-moleculs";
import { COLORS } from "@themes";

import { useHome } from "./logic/useHome";
import { ItemRickAndMorty } from "./component";
import styles from "./styles";

const HomePage: React.FC = () => {
  const { navigate }: any = useNavigation();

  const { dataList, loading, loadingFirstTime, _loadMoreList, _getListData } =
    useHome();

  const _renderItem = ({ item, index }: { item: Item; index: number }) => {
    return (
      <ItemRickAndMorty
        item={item}
        indexItem={index}
        onPress={() => {
          navigate("DetailPage", { id: item.id, name: item.name });
        }}
      />
    );
  };

  return (
    <Layout statusBarStyle="light-content">
      <Header isDetail={false} title="Characters" />
      {loadingFirstTime ? (
        <ShimmerList />
      ) : (
        <FlatList
          data={dataList}
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          onEndReachedThreshold={0.1}
          onEndReached={
            dataList?.length >= 20 && !loading && !loadingFirstTime
              ? _loadMoreList
              : null
          }
          ListFooterComponent={
            loading ? (
              <ActivityIndicator
                color={COLORS.purple}
                size={30}
                style={styles.bottom}
              />
            ) : (
              <View style={styles.bottom} />
            )
          }
        />
      )}
    </Layout>
  );
};

export default HomePage;
