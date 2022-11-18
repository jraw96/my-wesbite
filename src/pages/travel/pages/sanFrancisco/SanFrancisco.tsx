import React from 'react';
import MyGallery, {
  galleryStyles,
} from '../../../../components/Gallery/gallery';
import { TravelPageTitles } from '../../../../util/types';
import { parisList } from '../france/albumLists';

interface travelAlbumProps {
  title: TravelPageTitles;
}

function SanFrancisco({ title }: travelAlbumProps) {
  const section1: galleryStyles = {
    display: 'grid',
    gridTemplateColumns: '240px 271px 171px',
    gridTemplateRows: '114px 114px',
    gridGap: 12,
  };

  return (
    <div className="travel-album-container">
      <div>{title} album goes here </div>
      <MyGallery photos={parisList} styles={section1} />
    </div>
  );
}

export default SanFrancisco;
