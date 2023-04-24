import { useCallback, useEffect, useState } from "react";
import { ItemEpisode } from "@actions/request/types";
import { getEpisodRickAndMorty } from "@actions/request/rickAndMorty";

export const useItemDetail = ({ item }) => {
  const [dataDetailEpisode, setDataDetailEpisode] = useState<ItemEpisode>();

  useEffect(() => {
    _getDetailRickAndMorty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getDetailRickAndMorty = useCallback(() => {
    getEpisodRickAndMorty({
      url: item,
      onStart: () => {},
      onSuccess: (result) => {
        setDataDetailEpisode(result);
      },
      onFinish: () => {},
    });
  }, [item]);

  return { dataDetailEpisode };
};
