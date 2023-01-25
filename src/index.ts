import './style.scss';
import { getCars, driveCar } from './modules/api';
import {
  getInputValueToCreate,
  getButtons,
  getInputValueToUpdate,
  countCars,
} from './modules/utils';
import { renderHeader, renderBody } from './modules/renderCars';

renderHeader();
renderBody();
countCars();
getCars();
getInputValueToCreate();
getInputValueToUpdate();
setTimeout(getButtons, 1000);
driveCar();
