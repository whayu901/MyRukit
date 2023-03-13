import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Item } from "@actions/request/types";
import { Layout, Header } from "@component-moleculs";

import { useHome } from "./logic/useHome";
import { ItemRickAndMorty } from "./component";

const HomePage: React.FC = () => {
  const { navigate }: any = useNavigation();

  const { dataList, loading, loadingFirstTime } = useHome();

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
      <FlatList
        data={dataList}
        showsVerticalScrollIndicator={false}
        renderItem={_renderItem}
      />
    </Layout>
  );
};

export default HomePage;
