import React, { memo, useMemo } from "react";
import {
  StatusBar,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";

import styleC from "./styles";

interface PropsLayout {
  styles?: any;
  children: any;
  statusBarStyle?: StatusBarStyle;
  withTopEdges?: boolean;
}

const Layout = ({
  styles,
  children,
  statusBarStyle,
  withTopEdges,
}: PropsLayout) => {
  const edges: ReadonlyArray<Edge> = useMemo(() => {
    const edge: Array<Edge> = ["left", "right"];
    if (withTopEdges) {
      edge.push("top");
    }
    return edge;
  }, [withTopEdges]);

  const layoutStyle: StyleProp<ViewStyle> = useMemo(() => {
    return [
      styleC.container,
      withTopEdges ? { backgroundColor: "white" } : undefined,
    ];
  }, [withTopEdges]);

  return (
    <SafeAreaView style={layoutStyle} edges={edges}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={statusBarStyle ?? "dark-content"}
        translucent={true}
      />
      <View style={[styleC.containerWithStatus, styles]}>{children}</View>
    </SafeAreaView>
  );
};

export default memo(Layout);
