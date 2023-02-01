import { IItemsData } from '../../types/index';
import { ISource } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';


export class AppView {
    constructor(public news: News , public sources: Sources ) {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: IItemsData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ISource): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
