export enum apiKey {
  API = '0e6db3dc33254ba3b97c126cb33f517e'
}

export interface IItemsData {
    articles: any;
    urlToImage: string;
    author: string;
    source: { name: string,
              id: null,
            };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

export interface ISource {
  sources: any;
  id: string;
  name: string;
}

export interface Option {
  apiKey: string;
}
