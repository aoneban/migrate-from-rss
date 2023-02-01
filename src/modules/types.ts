export interface Car {
  slice(arg0: number, arg1: number): unknown;
  name: string;
  color: string;
  id?: number;
}

export interface Started {
  id?: number;
  velocity: number;
  distance: number;
}

export type NumberString = string[] | number[];
