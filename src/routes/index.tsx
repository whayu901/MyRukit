import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../pages/homePage";
import DetailPage from "../pages/detailPage";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
