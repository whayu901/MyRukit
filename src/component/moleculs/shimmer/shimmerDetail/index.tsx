import React, { memo, FC } from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const ShimmerDetail = () => {
  const { height } = Dimensions.get("window");

  return (
    <>
      <View
        style={{ width: "100%", height: 375, backgroundColor: "#C4C4C4" }}
      />
      <View
        style={{
          width: 132,
          height: 16,
          backgroundColor: "#C4C4C4",
          marginTop: 26,
          marginLeft: 16,
        }}
      />
      <View
        style={{
          width: 343,
          height: 74,
          backgroundColor: "#C4C4C4",
          marginTop: 26,
          marginLeft: 16,
        }}
      />
    </>
  );
};

export default memo(ShimmerDetail);
