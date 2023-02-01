import { Started, Car } from './types';

const getUrl = 'http://localhost:3000';
const path = {
  garage: '/garage',
  engine: '/engine',
};

export const getCars = async (): Promise<Car> => {
  const result = await fetch(`${getUrl}${path.garage}`);
  const data: Car = await result.json();
  return data;
};

export const createCar = async (body: { name: string; color: string }): Promise<Car> => {
  const result = await fetch(`${getUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data: Car = await result.json();
  return data;
};

export const mainToCreate = async (car: string, color: string): Promise<void> => {
  await createCar({
    name: car,
    color,
  });
};

export const deleteCar = async (id: number): Promise<Car> => {
  const result = await fetch(`${getUrl}${path.garage}/${id}`, {
    method: 'DELETE',
  });
  const deleteCars: Car = await result.json();
  return deleteCars;
};

export const mainToDelete = async (id: number): Promise<void> => {
  await deleteCar(id);
};

export const updateCar = async (
  id: number,
  // eslint-disable-next-line prettier/prettier
  body: { name: string; color: string },
): Promise<Car> => {
  const result = await fetch(`${getUrl}${path.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data: Car = await result.json();
  return data;
};

export const mainToUpdate = async (id: number, car: string, color: string): Promise<void> => {
  await updateCar(id, {
    name: car,
    color,
  });
};

export const getToSpeed = async (id: number): Promise<Started> => {
  const result = await fetch(`${getUrl}${path.engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const data: Started = await result.json();
  return data;
};

export const getMaxSpeedToCar = async (id: number): Promise<Started> => {
  const result = await getToSpeed(id);
  const velocity = result.velocity as number;
  const distance = result.distance as number;
  const data: number = distance / velocity;
  return data as never;
};

export async function driveCar(): Promise<void> {
  setTimeout(() => {
    const myButton = document.querySelectorAll('.btn-A') as NodeList;
    myButton.forEach((el) => {
      el.addEventListener('click', async (e: Event) => {
        const targetElement = e.currentTarget as HTMLInputElement;
        const newId = Number(targetElement.id) as number;
        const parentElem = e.currentTarget as HTMLInputElement;
        const newParentElement = parentElem.parentElement as HTMLTemplateElement;
        const currentImg = newParentElement.nextSibling as HTMLTemplateElement;
        const currentImgTwo = currentImg.lastChild as HTMLTemplateElement;
        const currentImgThree = currentImgTwo.lastChild as HTMLTemplateElement;
        const currentImgFour = currentImgThree.previousSibling as HTMLTemplateElement;
        const time = await getMaxSpeedToCar(newId);
        const speed = (time as never) / 200;
        let width = 6;
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const index = setInterval(frame, speed);
        function frame() {
          if (width === 190) {
            clearInterval(index);
          } else {
            width++;
            currentImgFour.style.width = `${width}%`;
          }
        }
      });
    });
  }, 1000);
}

export async function driveAllCars(): Promise<void> {
  setTimeout((): void => {
    const myButton = document.getElementById('race') as HTMLElement;
    myButton.addEventListener('click', async () => {
      const images = document.getElementsByClassName('img-main') as HTMLCollection;
      for (let i = 0; i <= images.length; i++) {
        const imagesTwo = images[i].firstChild as Element;
        const imagesThree = imagesTwo?.nextSibling as HTMLTemplateElement;
        const imagesFour = imagesThree?.nextSibling as HTMLTemplateElement;
        const imagesFive = imagesFour?.nextSibling as HTMLImageElement;
        const { id }: HTMLImageElement = imagesFive;
        // eslint-disable-next-line no-await-in-loop
        const time = await getMaxSpeedToCar(id as unknown as number);
        const speed: number = (time as unknown as number) / 200;
        let width = 6;
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const index = setInterval(frame, speed);
        // eslint-disable-next-line no-inner-declarations
        function frame(): void {
          if (width === 190) {
            clearInterval(index);
          } else {
            width++;
            imagesFive.style.width = `${width}%`;
          }
        }
      }
    });
  }, 0);
}
