import { Method } from "axios";

export type TBaseRequest = {
  baseUrl?: string;
  endpoint: string;
  method: Method;
  timeout?: number;
  needInformationTimeout?: boolean;
  withFormData?: boolean;
  withoutToken?: boolean;
  id?: number;
};

export type ResultType<D = any> = {
  status?: "success" | "error" | "loading";
  statusCode?: string;
  data: D;
  statusDescription?: string;
};
