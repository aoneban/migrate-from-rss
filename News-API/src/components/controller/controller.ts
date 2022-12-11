import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (() => void) | undefined) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: { target: Element; currentTarget: Element }, callback: (() => void) | undefined) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id');
                console.log(typeof sourceId)
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
