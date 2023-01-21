import { mainToCreate, mainToDelete } from './api';

export const getInputValueToCreate = (): void => {
  const input = document.querySelector('.btn-6');
  input?.addEventListener('click', () => {
    const inputValueCar = (document.getElementById('car-name') as HTMLInputElement).value;
    const inputValueColor = (document.getElementById('car-color') as HTMLInputElement).value;
    mainToCreate(inputValueCar, inputValueColor);
  });
};

export const getButtons = (): void => {
  const buttons = document.querySelectorAll('.btn-remove');
  buttons.forEach((el) => {
    el.addEventListener('click', (e: Event) => {
      mainToDelete((e.currentTarget as any).id);
      window.location.reload();
    });
  });
};
