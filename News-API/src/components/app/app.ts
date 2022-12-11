import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IItemsData, ISource } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IItemsData) => this.view.drawNews(data)));
        this.controller.getSources((data: ISource) => this.view.drawSources(data));
    }
}

export default App;
