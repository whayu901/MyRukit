export type Item = {
  id: number;
  name: string | null;
  species?: string | undefined;
  status: string | undefined;
  type: string;
  gender: string | undefined;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: string;
  episode: Array<any>;
};

export type ListResponse = {
  info: any;
  results: any[];
};
