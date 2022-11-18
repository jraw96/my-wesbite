import { France2019Images } from '../../../../util/images-urls';
import { francePlaces, photoItem } from '../../../../util/types';

export const parisList: photoItem[] = [
  {
    original: France2019Images.paris1,
    thumbnail: France2019Images.paris1,
    width: 1600,
    height: 1600,
    alt: 'Paris 1',
  },
  {
    original: France2019Images.paris2,
    thumbnail: France2019Images.paris2,
    width: 1600,
    height: 1600,
    alt: 'Paris 2',
  },
  {
    original: France2019Images.paris3,
    thumbnail: France2019Images.paris3,
    width: 1600,
    height: 1600,
    alt: 'Paris 3',
  },
  {
    original: France2019Images.paris4,
    thumbnail: France2019Images.paris4,
    width: 1600,
    height: 1600,
    alt: 'Paris 4',
  },
  {
    original: France2019Images.paris5,
    thumbnail: France2019Images.paris5,
    width: 1600,
    height: 1600,
    alt: 'Paris 5',
  },
];

const franceList: francePlaces = {
  paris: parisList,
  annecy: [],
};

export const gallerySpecs: any = {
  france: franceList,
  vietnam: '',
};
