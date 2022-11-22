import { photoItem } from '../../../../util/types';

export interface westTexasPlaces {
  whiteSands: photoItem[];
  guadeloupeMountains: photoItem[];
  ontheRoad: photoItem[];
}

const whiteSands: photoItem[] = [];
const guadeloupeMountains: photoItem[] = [];
const ontheRoad: photoItem[] = [];

export const westTexasList: westTexasPlaces = {
  whiteSands: whiteSands,
  guadeloupeMountains: guadeloupeMountains,
  ontheRoad: ontheRoad,
};
