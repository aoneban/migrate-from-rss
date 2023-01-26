import { mainToCreate, mainToDelete, mainToUpdate } from './api';
import { generateRandomColors } from './helpers';

export const getInputValueToCreate = (): void => {
  const input = document.querySelector('.btn-6') as HTMLInputElement;
  input?.addEventListener('click', () => {
    const inputValueCar = (document.getElementById('car-name') as HTMLInputElement).value;
    const inputValueColor = (document.getElementById('car-color') as HTMLInputElement).value;
    mainToCreate(inputValueCar, inputValueColor);
  });
};

export const getInputValueToUpdate = (): void => {
  const len = document.getElementsByClassName('cars-img') as HTMLCollection;
  const input = document.querySelector('.btn-7') as HTMLInputElement;
  input?.addEventListener('click', () => {
    const inputValueCar = (document.getElementById('car-name-update') as HTMLInputElement).value;
    const inputValueColor = (document.getElementById('car-color-update') as HTMLInputElement).value;
    mainToUpdate(len.length, inputValueCar, inputValueColor);
  });
};

export const getButtons = (): void => {
  const buttons = document.querySelectorAll('.btn-remove') as NodeList;
  buttons.forEach((el) => {
    el.addEventListener('click', (e: Event) => {
      const target = e.currentTarget as HTMLInputElement;
      const targetId = Number(target.id);
      mainToDelete(targetId as number);
      window.location.reload();
    });
  });
};

export function countCars(): void {
  setTimeout(() => {
    const newImg = document.querySelectorAll('.cars-img') as NodeList;
    const garage = document.querySelector('.count-cars') as HTMLElement;
    const count: string = newImg.length.toString();
    garage.innerText = `(${count})`;
  }, 500);
}

export const generateToHundredCars = (): void => {
  const input = document.querySelector('.generate-cars') as HTMLButtonElement;
  input?.addEventListener('click', async () => {
    input.disabled = true;
    for (let i = 0; i <= 100; i++) {
      const inputValueCar = `Mercedes-00${i}` as string;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const inputValueColor = generateRandomColors() as string;
      // eslint-disable-next-line no-await-in-loop
      await mainToCreate(inputValueCar, inputValueColor);
    }
    window.location.reload();
    input.disabled = false;
  });
};
