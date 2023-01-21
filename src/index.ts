import './style.scss';
import { getCars } from './modules/api';
import { getInputValueToCreate, getButtons } from './modules/utils';

getCars();
getInputValueToCreate();
setTimeout(getButtons, 1000);
