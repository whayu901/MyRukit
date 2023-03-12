import React from "react";
import { View, Text } from "react-native";

import { useHome } from "./logic/useHome";

const HomePage: React.FC = () => {
  const { dataList, loading, loadingFirstTime } = useHome();

  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

export default HomePage;
