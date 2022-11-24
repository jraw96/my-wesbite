import { photoItem } from '../../../../util/types';

export interface roadTrip2022Places {
  grandCanyon: photoItem[];
  monumentValley: photoItem[];
  canyonLands: photoItem[];
  arches: photoItem[];
  deadHorse: photoItem[];
  zion: photoItem[];
  yosemite: photoItem[];
}

const grandCanyon: photoItem[] = [];
const monumentValley: photoItem[] = [];
const canyonLands: photoItem[] = [];
const arches: photoItem[] = [];
const deadHorse: photoItem[] = [];
const zion: photoItem[] = [];
const yosemite: photoItem[] = [];

export const roadTrip2022List: roadTrip2022Places = {
  grandCanyon: grandCanyon,
  monumentValley: monumentValley,
  canyonLands: canyonLands,
  arches: arches,
  deadHorse: deadHorse,
  zion: zion,
  yosemite: yosemite,
};
