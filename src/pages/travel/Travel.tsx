import React from 'react';
import AlbumPreview from '../../components/albumPreview/albumPreview';
import { imageProps } from '../../components/Image/ImageRenderer';
import { TravelPreviewImages } from '../../util/images-urls';
import './Travel.scss';

const previewWidth = 300;

// Posing infront of Yosmeite pic
const imageProps1: imageProps = {
  src: TravelPreviewImages.fourStateRoadTrip2022,
  alt: 'Zion preview',
  width: previewWidth,
};

const imageProps2: imageProps = {
  src: TravelPreviewImages.sanFran2022,
  alt: 'San Francisco preview',
  width: previewWidth,
};

const imageProps3: imageProps = {
  src: TravelPreviewImages.miami2021,
  alt: 'Miami preview',
  width: previewWidth,
};

const imageProps4: imageProps = {
  src: TravelPreviewImages.westTexas2021,
  alt: 'West Texas preview',
  width: previewWidth,
};

const imageProps5: imageProps = {
  src: TravelPreviewImages.austin2021,
  alt: 'West Texas preview',
  width: previewWidth,
};

const imageProps6: imageProps = {
  src: TravelPreviewImages.toronto2020,
  alt: 'West Texas preview',
  width: previewWidth,
};

const imageProps7: imageProps = {
  src: TravelPreviewImages.france2019,
  alt: 'West Texas preview',
  width: previewWidth,
};

const imageProps8: imageProps = {
  src: TravelPreviewImages.vietnam2019,
  alt: 'West Texas preview',
  width: previewWidth,
};

function Travel() {
  return (
    <div className="travel-container">
      <div className="blurb-section">
        <p className="text">Picture albums from my travels.</p>
      </div>
      <div className="preview-section" id="2022">
        <AlbumPreview
          imageProps={imageProps1}
          title="AZ, UT, NV & CA Road Trip"
        />
        <AlbumPreview imageProps={imageProps2} title="San Francisco" />
        <AlbumPreview imageProps={imageProps3} title="Miami" />
        <AlbumPreview imageProps={imageProps4} title="West Texas Road Trip" />
        <AlbumPreview imageProps={imageProps5} title="Austin" />
        <AlbumPreview imageProps={imageProps6} title="Toronto" />
        <AlbumPreview imageProps={imageProps7} title="France" />
        <AlbumPreview imageProps={imageProps8} title="Vietnam" />
      </div>
    </div>
  );
}

export default Travel;
