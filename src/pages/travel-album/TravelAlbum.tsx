import React from 'react';
import { TravelPageTitles } from '../../util/types';
import './TravelAlbum.scss';

interface travelAlbumProps {
  title: TravelPageTitles;
}

function TravelAlbum({ title }: travelAlbumProps) {
  return (
    <div className="travel-album-container">
      <div>{title} album goes here </div>
    </div>
  );
}

export default TravelAlbum;
