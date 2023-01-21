import { main } from './api';

export const getInputValueToCreate = (): void => {
  const input = document.querySelector('.btn-6');
  input?.addEventListener('click', () => {
    const inputValueCar = (document.getElementById('car-name') as HTMLInputElement).value;
    const inputValueColor = (document.getElementById('car-color') as HTMLInputElement).value;
    main(inputValueCar, inputValueColor);
  });
};
