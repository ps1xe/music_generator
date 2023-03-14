export interface Sounds {
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
