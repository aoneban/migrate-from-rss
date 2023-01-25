import { mainToCreate, mainToDelete, mainToUpdate } from './api';

export const getInputValueToCreate = (): void => {
  const input = document.querySelector('.btn-6');
  input?.addEventListener('click', () => {
    const inputValueCar = (document.getElementById('car-name') as HTMLInputElement).value;
    const inputValueColor = (document.getElementById('car-color') as HTMLInputElement).value;
    mainToCreate(inputValueCar, inputValueColor);
  });
};

export const getInputValueToUpdate = (): void => {
  const len = document.getElementsByClassName('cars-img');
  const input = document.querySelector('.btn-7');
  input?.addEventListener('click', () => {
    const inputValueCar = (document.getElementById('car-name-update') as HTMLInputElement).value;
    const inputValueColor = (document.getElementById('car-color-update') as HTMLInputElement).value;
    mainToUpdate(len.length, inputValueCar, inputValueColor);
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

export function countCars(): void {
  setTimeout(() => {
    const newImg = document.querySelectorAll('.cars-img');
    const garage = document.querySelector('.count-cars') as HTMLElement;
    const count = newImg.length.toString();
    garage.innerText = `(${count})`;
  }, 500);
}
