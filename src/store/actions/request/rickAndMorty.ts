import { PayloadWithCallback } from "src/store";
import { request } from "src/utils/scripts/request";
import { ResultType } from "src/utils/scripts/types/request-type";

import { ListResponse, Item, ItemEpisode } from "./types";

export const getRickAndMortyList = ({
  onStart = () => null,
  onFinish,
  onSuccess,
  onError,
}: PayloadWithCallback<ListResponse>) => {
  onStart();
  request({
    method: "GET",
    endpoint: "character",
  })
    .then((res) => {
      onSuccess(res);
    })
    .catch((e) => onError?.(e))
    .finally(() => onFinish?.());
};

export const getDetailRickAndMorty = ({
  id,
  onStart = () => null,
  onFinish,
  onSuccess,
  onError,
}: PayloadWithCallback<Item>) => {
  onStart();
  request({
    method: "GET",
    endpoint: "character",
    id,
  })
    .then((res) => {
      onSuccess(res);
    })
    .catch((e) => onError?.(e))
    .finally(() => onFinish?.());
};

export const getEpisodRickAndMorty = ({
  url,
  onStart = () => null,
  onFinish,
  onSuccess,
  onError,
}: PayloadWithCallback<ItemEpisode>) => {
  onStart();
  request({
    method: "GET",
    baseUrl: url,
  })
    .then((res) => {
      onSuccess(res);
    })
    .catch((e) => onError?.(e))
    .finally(() => onFinish?.());
};
