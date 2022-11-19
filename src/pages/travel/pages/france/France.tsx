import React from 'react';
import MyGallery, { gridCSS } from '../../../../components/Gallery/gallery';
import { TravelPageTitles } from '../../../../util/types';
import { parisList } from './albumLists';

interface travelAlbumProps {
  title: TravelPageTitles;
}

function France({ title }: travelAlbumProps) {
  const section1: gridCSS = {
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px 399px 355px',
    gridTemplateRows: '100%',
    gridGap: 12,
  };

  return (
    <div className="travel-album-container">
      <div>{title} album goes here </div>
      <MyGallery photos={parisList} grid={section1} />
    </div>
  );
}

export default France;
