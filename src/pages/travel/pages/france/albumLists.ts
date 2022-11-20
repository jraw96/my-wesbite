import { France2019Images } from '../../../../util/images-urls';
import { photoItem } from '../../../../util/types';

export interface francePlaces {
  paris: photoItem[];
  annecy: photoItem[];
  nice: photoItem[];
  monaco: photoItem[];
  saintTropez: photoItem[];
  bordeaux: photoItem[];
}

export const parisList: photoItem[] = [
  {
    src: France2019Images.paris2,
    width: 727,
    height: 969,
    alt: 'Paris 2',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris1,
    width: 727,
    height: 969,
    alt: 'Paris 1',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris6,
    width: 727,
    height: 969,
    alt: 'Paris 6',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris4,
    width: 1453,
    height: 969,
    alt: 'Paris 4',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris5,
    width: 1292,
    height: 969,
    alt: 'Paris 5',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris7,
    width: 1453,
    height: 969,
    alt: 'Paris 7',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris8,
    width: 1453,
    height: 969,
    alt: 'Paris 8',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris9,
    width: 727,
    height: 969,
    alt: 'Paris 9',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris10,
    width: 1453,
    height: 969,
    alt: 'Paris 10',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris11,
    width: 1453,
    height: 969,
    alt: 'Paris 11',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris12,
    width: 1292,
    height: 969,
    alt: 'Paris 12',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris13,
    width: 2094,
    height: 1396,
    alt: 'Paris 13',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris14,
    width: 1731,
    height: 1298,
    alt: 'Paris 14',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris3,
    width: 727,
    height: 969,
    alt: 'Paris 3',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris15,
    width: 1731,
    height: 1298,
    alt: 'Paris 15',
    id: 'thumbnail',
  },
];

const annecyList: photoItem[] = [
  {
    src: France2019Images.annecy,
    width: 1453,
    height: 969,
    alt: 'Annecy 1',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy2,
    width: 727,
    height: 969,
    alt: 'Annecy 2',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy3,
    width: 1292,
    height: 969,
    alt: 'Annecy 3',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy4,
    width: 727,
    height: 969,
    alt: 'Annecy 4',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy5,
    width: 1292,
    height: 969,
    alt: 'Annecy 5',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy6,
    width: 1292,
    height: 969,
    alt: 'Annecy 6',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy7,
    width: 727,
    height: 969,
    alt: 'Annecy 7',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy8,
    width: 1292,
    height: 969,
    alt: 'Annecy 1',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy10,
    width: 1731,
    height: 1298,
    alt: 'Annecy 1',
    id: 'thumbnail',
  },
  {
    src: France2019Images.annecy9,
    width: 1920,
    height: 462,
    alt: 'Annecy 9',
    id: 'thumbnail',
  },
];
const niceList: photoItem[] = [];
const monacoList: photoItem[] = [];
const saintTropezList: photoItem[] = [];
const bordeauxList: photoItem[] = [];

// Exportable object
export const franceList: francePlaces = {
  paris: parisList,
  annecy: annecyList,
  nice: niceList,
  monaco: monacoList,
  saintTropez: saintTropezList,
  bordeaux: bordeauxList,
};
