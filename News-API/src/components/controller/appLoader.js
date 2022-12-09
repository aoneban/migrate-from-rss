import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0e6db3dc33254ba3b97c126cb33f517e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
