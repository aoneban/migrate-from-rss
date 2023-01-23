import './style.scss';
import { getCars, driveCar } from './modules/api';
import { getInputValueToCreate, getButtons, getInputValueToUpdate } from './modules/utils';

getCars();
getInputValueToCreate();
getInputValueToUpdate();
setTimeout(getButtons, 1000);
driveCar();
