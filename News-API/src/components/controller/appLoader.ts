import Loader from './loader';
import { apiKey } from '../../types/index';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: apiKey.API, // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
