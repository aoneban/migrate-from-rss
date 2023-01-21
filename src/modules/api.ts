import { renderCars } from './renderCars';

const getUrl = 'http://localhost:3000';
const path = {
  garage: '/garage',
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
  const data2 = await result.json();
  return data2;
};

export const mainToCreate = async (car: string, color: string): Promise<void> => {
  const data2 = await createCar({
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
