import React from 'react';
import MyGallery from '../../../../components/Gallery/gallery';
import { TravelPageTitles } from '../../../../util/types';
import { parisList } from './albumLists';

interface travelAlbumProps {
  title: TravelPageTitles;
}

function France({ title }: travelAlbumProps) {
  return (
    <div className="travel-album-container">
      <div>{title} album goes here </div>
      <MyGallery photos={parisList} />
    </div>
  );
}

export default France;
