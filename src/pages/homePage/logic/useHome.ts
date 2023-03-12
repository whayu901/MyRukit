import { useCallback, useEffect, useRef, useState } from "react";
import {
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from "@react-navigation/native";
import { ListResponse } from "@actions/request/types";
import { getRickAndMortyList } from "@actions/request/rickAndMorty";

export const useHome = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingFirstTime, setloadingFirstTime] = useState<boolean>(true);
  const [dataList, setDataList] = useState<Array<ListResponse>>([]);

  const isAll = useRef(false);

  useEffect(() => {
    _getListData(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getListData = useCallback((page = 0) => {
    getRickAndMortyList({
      onStart: () => {
        if (page === 0) {
          setloadingFirstTime(true);
          isAll.current = false;
        } else {
          setLoading(true);
        }
      },
      onSuccess: (result) => {
        if (page === 0) {
          setDataList(result?.results ?? []);
        } else {
          setDataList((prevState) => [
            ...prevState,
            ...(result?.results || []),
          ]);
        }
        if (result?.results && result?.results?.length < 10) {
          isAll.current = true;
          return;
        }
      },
      onFinish: () => {
        setLoading(false);
        setloadingFirstTime(false);
      },
    });
  }, []);

  return {
    dataList,
    loading,
    loadingFirstTime,
  };
};
