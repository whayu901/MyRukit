import { useCallback, useEffect, useRef, useState } from "react";
import { Item } from "@actions/request/types";
import { getRickAndMortyList } from "@actions/request/rickAndMorty";

export const useHome = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingFirstTime, setloadingFirstTime] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [dataList, setDataList] = useState<Array<Item>>([]);

  const isAll = useRef(false);

  useEffect(() => {
    _getListData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getListData = useCallback(
    (p = 0) => {
      getRickAndMortyList({
        page: page,
        onStart: () => {
          if (p === 1) {
            setloadingFirstTime(true);
            isAll.current = false;
          } else {
            setLoading(true);
          }
        },
        onSuccess: (result) => {
          setPage(p + 1);
          if (p === 0) {
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
    },
    [page],
  );

  const _loadMoreList = () => {
    _getListData(page);
  };

  return {
    dataList,
    loading,
    loadingFirstTime,
    _getListData,
    _loadMoreList,
  };
};
