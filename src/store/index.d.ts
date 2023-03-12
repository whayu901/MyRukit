export type PayloadWithCallback<ResponseData = any, StartPayload = any> = {
  id?: number;
  onStart?: (data?: StartPayload) => void;
  onSuccess: (data?: ResponseData) => void;
  onFinish?: () => void;
  onError?: (error: Error) => void;
  onFailed?: (
    data: ResponseData,
    statusCode: string,
    statusDescription?: string,
  ) => void;
};
