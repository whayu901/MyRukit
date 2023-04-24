import axios, { AxiosResponse } from "axios";

import { TBaseRequest } from "./types/request-type";

export const request = async ({
  baseUrl,
  endpoint,
  method,
  timeout = 15000,
  id,
  params,
}: TBaseRequest) => {
  const reqUrl = baseUrl
    ? baseUrl
    : "https://rickandmortyapi.com/api/" + endpoint + `${id ? "/" + id : ""}`;

  try {
    const res: AxiosResponse = await axios({
      url: reqUrl,
      method,
      timeout: timeout,
      params: params,
    });

    return res?.data || {};
  } catch (error: any) {
    const { code, message } = error;

    if (message === "Network Error" || code === "ECONNABORTED") {
      return { statusDescription: "Please Check Your Connection!" };
    } else {
      return { statusDescription: "Something Wrong With Our Server!" };
    }
  }
};
