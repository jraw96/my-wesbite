import React from 'react';
import ImageRenderer, {
  imageProps,
} from '../../components/Image/ImageRenderer';
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
        <div className="album" id="epic-usa-roadtrip">
          <ImageRenderer {...imageProps1} />
          <h2>AZ, UT, NV & CA Road Trip </h2>
        </div>
        <div className="album" id="tom-visit">
          <ImageRenderer {...imageProps2} />
          <h2> San Francisco </h2>
        </div>
        <div className="album" id="miami">
          <ImageRenderer {...imageProps3} />
          <h2> Miami </h2>
        </div>
        <div className="album" id="west-texas">
          <ImageRenderer {...imageProps4} />
          <h2> West Texas Road Trip </h2>
        </div>
        <div className="album" id="austin">
          <ImageRenderer {...imageProps5} />
          <h2> Austin </h2>
        </div>
        <div className="album" id="toronto">
          <ImageRenderer {...imageProps6} />
          <h2> Toronto </h2>
        </div>
        <div className="album" id="france">
          <ImageRenderer {...imageProps7} />
          <h2> France </h2>
        </div>
        <div className="album" id="vietnam">
          <ImageRenderer {...imageProps8} />
          <h2> Vietnam </h2>
        </div>
      </div>
    </div>
  );
}

export default Travel;
