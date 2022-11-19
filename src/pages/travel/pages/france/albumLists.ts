import { France2019Images } from '../../../../util/images-urls';
import { francePlaces, photoItem } from '../../../../util/types';

export const parisList: photoItem[] = [
  {
    original: France2019Images.paris1,
    thumbnail: France2019Images.paris1,
    thumbnailWidth: '100%',
    width: 727,
    height: 969,
    alt: 'Paris 1',
  },
  {
    original: France2019Images.paris2,
    thumbnail: France2019Images.paris2,
    thumbnailWidth: '100%',

    width: 727,
    height: 969,
    alt: 'Paris 2',
  },
  {
    original: France2019Images.paris3,
    thumbnail: France2019Images.paris3,
    thumbnailWidth: '100%',
    width: 727,
    height: 969,
    alt: 'Paris 3',
  },
  {
    original: France2019Images.paris4,
    thumbnail: France2019Images.paris4,
    thumbnailWidth: '100%',
    width: 1453,
    height: 969,
    alt: 'Paris 4',
  },
  {
    original: France2019Images.paris5,
    thumbnail: France2019Images.paris5,
    thumbnailWidth: '100%',
    width: 1292,
    height: 969,
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
