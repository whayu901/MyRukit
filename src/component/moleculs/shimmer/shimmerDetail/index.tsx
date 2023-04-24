/* eslint-disable react-native/no-inline-styles */
import React, { memo } from "react";
import { View } from "react-native";

const ShimmerDetail = () => {
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
