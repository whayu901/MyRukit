import axios, { AxiosResponse, AxiosError } from "axios";

import { TBaseRequest, ResultType } from "./types/request-type";

export const request = async ({
  baseUrl,
  endpoint,
  method,
  timeout = 15000,
  id,
}: TBaseRequest) => {
  const result: ResultType = {
    status: "loading",
    statusCode: "",
    data: "",
    statusDescription: "",
  };

  const reqUrl =
    "https://rickandmortyapi.com/api/" + endpoint + `${id ? "/" + id : ""}`;

  try {
    const res: AxiosResponse = await axios({
      url: reqUrl,
      method,
      timeout: timeout,
    });

    const resultSuccess: ResultType = {
      status: "success",
      statusCode: `${res.data?.statusCode}`,
      data: `${res.data?.data}`,
      statusDescription: `${res.data?.statusDescription}`,
    };

    return res?.data || {};
  } catch (error: AxiosError | any) {
    const { code, message, response } = error;
    const resError: AxiosResponse<any> | any = response;

    const resultError: ResultType = {
      status: "error",
      statusCode: `${resError?.data?.statusCode}`,
      data: `${resError?.data?.data}`,
      statusDescription: `${resError?.data?.statusDescription}`,
    };

    if (message === "Network Error" || code === "ECONNABORTED") {
      return { statusDescription: "Please Check Your Connection!" };
    } else {
      return { statusDescription: "Something Wrong With Our Server!" };
    }
  }
};
