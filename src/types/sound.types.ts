export interface Sounds {
  soundsInfo:
    | [
        {
          name: string;
          genre: string;
          length: number;
          url: string;
          loaded: boolean;
        }
      ]
    | [];
  meta: {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface GenerateBody {
  name: string;
  genre: string;
  length: number;
}

export interface GeneratedSound {
  url: string;
}
