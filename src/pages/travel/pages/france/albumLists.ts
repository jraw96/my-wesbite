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
    original: France2019Images.paris4,
    thumbnail: France2019Images.paris4,
    thumbnailWidth: '100%',
    width: 1453,
    height: 969,
    alt: 'Paris 4',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris5,
    original: France2019Images.paris5,
    thumbnail: France2019Images.paris5,
    thumbnailWidth: '100%',
    width: 1292,
    height: 969,
    alt: 'Paris 5',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris7,
    original: France2019Images.paris7,
    thumbnail: France2019Images.paris7,
    thumbnailWidth: '100%',
    width: 1453,
    height: 969,
    alt: 'Paris 7',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris8,
    original: France2019Images.paris8,
    thumbnail: France2019Images.paris8,
    thumbnailWidth: '100%',
    width: 1453,
    height: 969,
    alt: 'Paris 8',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris9,
    original: France2019Images.paris9,
    thumbnail: France2019Images.paris9,
    thumbnailWidth: '100%',
    width: 727,
    height: 969,
    alt: 'Paris 9',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris10,
    original: France2019Images.paris10,
    thumbnail: France2019Images.paris10,
    thumbnailWidth: '100%',
    width: 1453,
    height: 969,
    alt: 'Paris 10',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris11,
    original: France2019Images.paris11,
    thumbnail: France2019Images.paris11,
    thumbnailWidth: '100%',
    width: 1453,
    height: 969,
    alt: 'Paris 11',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris12,
    original: France2019Images.paris12,
    thumbnail: France2019Images.paris12,
    thumbnailWidth: '100%',
    width: 1292,
    height: 969,
    alt: 'Paris 12',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris13,
    original: France2019Images.paris13,
    thumbnail: France2019Images.paris13,
    thumbnailWidth: '100%',
    width: 2094,
    height: 1396,
    alt: 'Paris 13',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris14,
    original: France2019Images.paris14,
    thumbnail: France2019Images.paris14,
    thumbnailWidth: '100%',
    width: 1731,
    height: 1298,
    alt: 'Paris 14',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris3,
    original: France2019Images.paris3,
    thumbnail: France2019Images.paris3,
    thumbnailWidth: '100%',
    width: 727,
    height: 969,
    alt: 'Paris 3',
    id: 'thumbnail',
  },
  {
    src: France2019Images.paris15,
    original: France2019Images.paris15,
    thumbnail: France2019Images.paris15,
    thumbnailWidth: '100%',
    width: 1731,
    height: 1298,
    alt: 'Paris 15',
    id: 'thumbnail',
  },
];

const annecyList: photoItem[] = [];
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
