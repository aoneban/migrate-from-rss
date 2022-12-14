import './sources.css';
import { ISource } from '../../../types/index';

class Sources {
    public draw(data: ISource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item: ISource) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        
        const sourceNews = document.querySelector('.sources') as HTMLTemplateElement
        sourceNews.append(fragment);
    }
}

export default Sources;
