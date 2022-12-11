export interface IItemsData {
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
  id: string;
  name: string;
}