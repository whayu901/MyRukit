import { useCallback, useEffect, useRef, useState } from "react";
import { Item } from "@actions/request/types";
import { getDetailRickAndMorty } from "@actions/request/rickAndMorty";

export const useDetail = ({ navigation, route }) => {
  const { params } = route;

  const [loading, setLoading] = useState<boolean>(false);
  const [title] = useState<string>(params?.name);
  const [dataDetail, setDataDetail] = useState<Item>();

  useEffect(() => {
    _getDetailRickAndMorty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  };
};
