import './style.scss';
import { getCars, driveCar, driveAllCars } from './modules/api';
import {
  getInputValueToCreate,
  getButtons,
  getInputValueToUpdate,
  countCars,
  generateToHundredCars,
} from './modules/utils';
import { renderHeader, renderBody, renderFooter } from './modules/renderCars';

renderHeader();
renderBody();
renderFooter();
countCars();
getCars();
getInputValueToCreate();
getInputValueToUpdate();
setTimeout(getButtons, 1000);
driveCar();
driveAllCars();
generateToHundredCars();
