import React from 'react';
import MyGallery from '../../../../components/Gallery/gallery';
import { TravelPageTitles } from '../../../../util/types';
import { parisList } from '../france/albumLists';

interface travelAlbumProps {
  title: TravelPageTitles;
}

function WestTexas({ title }: travelAlbumProps) {
  return (
    <div className="travel-album-container">
      <div>{title} album goes here </div>
      <MyGallery photos={parisList} />
    </div>
  );
}

export default WestTexas;
