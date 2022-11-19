import React from 'react';
import MyGallery, { gridCSS } from '../../../../components/Gallery/gallery';
import { TravelPageTitles } from '../../../../util/types';
import { parisList } from '../france/albumLists';

interface travelAlbumProps {
  title: TravelPageTitles;
}

function Vietnam({ title }: travelAlbumProps) {
  const section1: gridCSS = {
    display: 'grid',
    gridTemplateColumns: '240px 271px 171px',
    gridTemplateRows: '114px 114px',
    gridGap: 12,
  };

  return (
    <div className="travel-album-container">
      <div>{title} album goes here </div>
      <MyGallery photos={parisList} grid={section1} />
    </div>
  );
}

export default Vietnam;
