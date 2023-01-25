import { renderCars } from './renderCars';
import { Started } from './types';

const getUrl = 'http://localhost:3000';
const path = {
  garage: '/garage',
  engine: '/engine',
};

export const getCars = async (): Promise<void> => {
  const result = await fetch(`${getUrl}${path.garage}`);
  const data = await result.json();
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  renderCars(data);
};

export const createCar = async (body: { name: string; color: string }): Promise<void> => {
  const result = await fetch(`${getUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await result.json();
  return data;
};

export const mainToCreate = async (car: string, color: string): Promise<void> => {
  const data = await createCar({
    name: car,
    color,
  });
};

export const deleteCar = async (id: number): Promise<void> => {
  const result = await fetch(`${getUrl}${path.garage}/${id}`, {
    method: 'DELETE',
  });
  const deleteCars = await result.json();
  return deleteCars;
};

export const mainToDelete = async (id: number): Promise<void> => {
  const deleteCars = await deleteCar(id);
};

// eslint-disable-next-line prettier/prettier
export const updateCar = async (
  id: number,
  body: { name: string; color: string }
): Promise<void> => {
  const result = await fetch(`${getUrl}${path.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await result.json();
  return data;
};

export const mainToUpdate = async (id: number, car: string, color: string): Promise<void> => {
  const data = await updateCar(id, {
    name: car,
    color,
  });
};

export const getToSpeed = async (id: number): Promise<Started> => {
  const result = await fetch(`${getUrl}${path.engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const data = await result.json();
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
    const myButton = document.querySelectorAll('.btn-A');
    myButton.forEach((el) => {
      el.addEventListener('click', async (e) => {
        const { id }: any = e.currentTarget;
        const parentElem = (e.currentTarget as any).parentElement;
        const currentImg = parentElem.nextSibling;
        const currentImgTwo = currentImg.lastChild;
        const currentImgThree = currentImgTwo.lastChild;
        const currentImgFour = currentImgThree.previousSibling;
        const time: any = await getMaxSpeedToCar(id);
        const speed = time / 200;
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
  setTimeout(() => {
    const myButton = document.getElementById('race') as Element;
    myButton.addEventListener('click', async () => {
      const images = document.getElementsByClassName('img-main');
      for (let i = 0; i <= images.length; i++) {
        const imagesTwo = images[i].firstChild;
        const imagesThree = imagesTwo?.nextSibling;
        const imagesFour = imagesThree?.nextSibling;
        const imagesFive = imagesFour?.nextSibling as ChildNode | any;
        const { id }: any = imagesFive;
        // eslint-disable-next-line no-await-in-loop
        const time: any = await getMaxSpeedToCar(id);
        const speed = time / 200;
        let width = 6;
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const index = setInterval(frame, speed);
        // eslint-disable-next-line no-inner-declarations, @typescript-eslint/no-loop-func
        function frame() {
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

driveAllCars();
