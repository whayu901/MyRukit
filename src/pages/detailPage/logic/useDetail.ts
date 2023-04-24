import { useCallback, useEffect, useState } from "react";
import { Animated } from "react-native";
import { Item } from "@actions/request/types";
import { getDetailRickAndMorty } from "@actions/request/rickAndMorty";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const useDetail = ({ navigation, route }) => {
  const { params } = route;

  const [loading, setLoading] = useState<boolean>(false);
  const [title] = useState<string>(params?.name);
  const [dataDetail, setDataDetail] = useState<Item>();
  const [scrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });

  useEffect(() => {
    _getDetailRickAndMorty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _onScroll = () => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: false,
    });
  };

  const _getDetailRickAndMorty = useCallback(() => {
    getDetailRickAndMorty({
      id: params?.id,
      onStart: () => {
        setLoading(true);
      },
      onSuccess: (result) => {
        setDataDetail(result);
      },
      onFinish: () => {
        setLoading(false);
      },
    });
  }, [params?.id]);

  const _goBackNavigate = () => {
    navigation.goBack();
  };

  return {
    dataDetail,
    loading,
    title,
    _goBackNavigate,
    headerHeight,
    headerOpacity,
    _onScroll,
  };
};
