import React from 'react';
import MyGallery from '../../../../components/Gallery/gallery';
import { torontoList } from './albumLists';
import './Toronto.scss';

function Toronto() {
  return (
    <div className="travel-album-container">
      <h2 className="title">Toronto </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={torontoList.toronto} />
      </div>
    </div>
  );
}

export default Toronto;
