export interface DataListProps {
  title: string;
  images: { webp: { image_url: string } };
  mal_id: number;
  title_japanese: string;
  type: string;

}

// export interface MangaProps {
//   title : string;
//   images: { webp: { image_url: string } }
//   mal_id : number;
//   title_japanese : string;
// }
// export interface AnimeData {
//   title : string;
//   images: { webp: { image_url: string } }
//   mal_id : number;
//   title_japanese : string;
// }

export interface HeadersProps {
  title: string;
  linkHref?: string;
  linkTitle?: string;
}

export interface PageProps {
  params: {
    keyword: string;
  };
}

export interface HeaderMenu {
  title: string;
}

export interface Page {
  page: number;
  lastPage: number;
  setPage: (prevState: number) => void;
}


export interface ApiLibs {
  // getAnimeResponse: (resource: any, query: any) => Promise<DataListProps[]>;
  resource: string;
  query: any;
}