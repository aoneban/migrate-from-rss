import './style.scss';
import { getCars, driveCar, driveAllCars } from './modules/api';
// eslint-disable-next-line object-curly-newline
import { renderHeader, renderCars, renderBody, renderFooter } from './modules/renderCars';
import {
  getInputValueToCreate,
  getButtons,
  getInputValueToUpdate,
  countCars,
  generateToHundredCars,
} from './modules/utils';

renderHeader();
renderBody();
renderCars();
renderFooter();
countCars();
getCars();
getInputValueToCreate();
getInputValueToUpdate();
setTimeout(getButtons, 1000);
driveCar();
driveAllCars();
generateToHundredCars();
