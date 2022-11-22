import React from 'react';
import MyGallery from '../../../../components/Gallery/gallery';
import { westTexasList } from './albumLists';
import './WestTexas.scss';

function WestTexas() {
  return (
    <div className="travel-album-container">
      <h2 className="title">Guadalupe Mountains</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={westTexasList.guadeloupeMountains} />
      </div>

      <h2 className="title">New Mexio White Sands</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={westTexasList.whiteSands} />
      </div>

      <h2 className="title">On the Road</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={westTexasList.ontheRoad} />
      </div>
    </div>
  );
}

export default WestTexas;
