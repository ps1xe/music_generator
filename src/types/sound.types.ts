export interface Sounds {
  soundsInfo: string[];
  sounds: string[];
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
