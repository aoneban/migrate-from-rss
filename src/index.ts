import './style.scss';
import { getCars, driveCar } from './modules/api';
import { getInputValueToCreate, getButtons, getInputValueToUpdate } from './modules/utils';
import { renderHeader, renderBody } from './modules/renderCars';

renderHeader();
renderBody();
getCars();
getInputValueToCreate();
getInputValueToUpdate();
setTimeout(getButtons, 1000);
driveCar();
