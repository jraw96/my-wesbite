import { photoItem } from '../../../../util/types';

export interface vietnamPlaces {
  hanoi: photoItem[];
  haLongBay: photoItem[];
  haGiang: photoItem[];
  phongNa: photoItem[];
  hue: photoItem[];
  hoiAnn: photoItem[];
  saigon: photoItem[];
}

const hanoi: photoItem[] = [];
const haLongBay: photoItem[] = [];
const haGiang: photoItem[] = [];
const phongNa: photoItem[] = [];
const hue: photoItem[] = [];
const hoiAnn: photoItem[] = [];
const saigon: photoItem[] = [];

export const vietnamList: vietnamPlaces = {
  hanoi: hanoi,
  haLongBay: haLongBay,
  haGiang: haGiang,
  phongNa: phongNa,
  hue: hue,
  hoiAnn: hoiAnn,
  saigon: saigon,
};
