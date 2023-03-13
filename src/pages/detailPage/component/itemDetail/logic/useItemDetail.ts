import { useCallback, useEffect, useState } from "react";
import { Animated } from "react-native";
import { ItemEpisode } from "@actions/request/types";
import { getEpisodRickAndMorty } from "@actions/request/rickAndMorty";

export const useItemDetail = ({ item }) => {
  const [dataDetailEpisode, setDataDetailEpisode] = useState<ItemEpisode>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    _getDetailRickAndMorty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getDetailRickAndMorty = useCallback(() => {
    getEpisodRickAndMorty({
      url: item,
      onStart: () => {
        setLoading(true);
      },
      onSuccess: (result) => {
        setDataDetailEpisode(result);
      },
      onFinish: () => {
        setLoading(false);
      },
    });
  }, [item]);

  return { dataDetailEpisode };
};
