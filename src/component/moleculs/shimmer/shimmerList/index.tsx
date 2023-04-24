import React, { memo } from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const ShimmerList = () => {
  return (
    <>
      {Array.from(Array(6)).map((_, index) => (
        <SkeletonPlaceholder key={index}>
          <SkeletonPlaceholder.Item flexDirection="row" padding={10}>
            <SkeletonPlaceholder.Item width={40} height={40} />
            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item width={150} height={20} />
              <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ))}
    </>
  );
};

export default memo(ShimmerList);
