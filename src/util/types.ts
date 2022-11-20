import { albumProps } from '../components/albumPreview/albumPreview';
import { TravelPreviewImages } from './images-urls';

// Main routes
export enum pages {
  home = '/',
  about = '/about',
  travel = '/travel',
  books = '/books',
  contact = '/contact',
}

// Title values for photo albums
export enum TravelPageTitles {
  austin = 'Austin',
  france = 'France',
  vietnam = 'Vietnam',
  miami = 'Miami',
  toronto = 'Toronto',
  sanFrancisco = 'San Francisco',
  westTexas = 'West Texas Road Trip',
  roadTrip2022 = 'AZ, UT, NV & CA Road Trip',
}

export enum TravelPageRoutes {
  austin = '/austin',
  france = '/france',
  miami = '/miami',
  vietnam = '/vietnam',
  toronto = '/toronto',
  roadTrip2022 = '/roadtrip-2022',
  westTexas = '/west-texas',
  sanFrancisco = '/san-francisco',
}

export enum TravelRouteToAlbum {
  austin = '/austin',
  france = '/france',
  miami = '/miami',
  vietnam = '/vietnam',
  toronto = '/toronto',
  roadTrip2022 = '/az-ut-nv-ca-roadtrip',
  westTexas = '/west-texas',
  sanFrancisco = '/san-francisco',
}

export interface travelPageRouteObject {
  path: TravelPageRoutes;
  albumPreview: albumProps;
}

// Photoswipe library props.
// These properties are used when the image is clicked on and expands to fill the screen
export interface photoItem {
  original?: string; // Link to image to used for exapnded image selection
  thumbnail?: string; // Link for the thumbnail image
  thumbnailWidth?: number | string;
  thumbnailHeight?: number | string;
  width: number; // Add the correct aspect ratio width of the image here
  height: number; // Add the correct aspect ratio height of the image here
  alt: string; // alt text
  src: string;
  id: string;
}

// Const values:
const previewWidth = 300;

// Travel sub routes
export const travelRoutes: travelPageRouteObject[] = [
  {
    path: TravelPageRoutes.roadTrip2022,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.fourStateRoadTrip2022,
        alt: 'AZ-UT-NV-CA preview',
        width: previewWidth,
      },
      title: TravelPageTitles.roadTrip2022,
    },
  },
  {
    path: TravelPageRoutes.sanFrancisco,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.sanFran2022,
        alt: 'San Francisco preview',
        width: previewWidth,
      },
      title: TravelPageTitles.sanFrancisco,
    },
  },
  {
    path: TravelPageRoutes.miami,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.miami2021,
        alt: 'Miami preview',
        width: previewWidth,
      },
      title: TravelPageTitles.miami,
    },
  },
  {
    path: TravelPageRoutes.westTexas,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.westTexas2021,
        alt: 'West Texas preview',
        width: previewWidth,
      },
      title: TravelPageTitles.westTexas,
    },
  },
  {
    path: TravelPageRoutes.austin,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.austin2021,
        alt: 'Austin thumbnail',
        width: previewWidth,
      },
      title: TravelPageTitles.austin,
    },
  },
  {
    path: TravelPageRoutes.toronto,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.toronto2020,
        alt: 'Toronto preview',
        width: previewWidth,
      },
      title: TravelPageTitles.toronto,
    },
  },
  {
    path: TravelPageRoutes.france,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.france2019,
        alt: 'France thumbnail',
        width: previewWidth,
      },
      title: TravelPageTitles.france,
    },
  },
  {
    path: TravelPageRoutes.vietnam,
    albumPreview: {
      imageProps: {
        src: TravelPreviewImages.vietnam2019,
        alt: 'Vietnam preview',
        width: previewWidth,
      },
      title: TravelPageTitles.vietnam,
    },
  },
];
