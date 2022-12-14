import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IItemsData, ISource } from '../../types/index';

class App {
    constructor (public controller: AppController, public view: AppView) {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data: IItemsData) => this.view.drawNews(data))
            );
        this.controller.getSources((data: ISource) => this.view.drawSources(data));
    }
}

export default App;
