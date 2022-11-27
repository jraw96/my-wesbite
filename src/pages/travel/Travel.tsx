import React from 'react';
import { Link } from 'react-router-dom';
import AlbumPreview from '../../components/albumPreview/albumPreview';
import { pages, travelPageRouteObject } from '../../util/types';
import './Travel.scss';

interface travelProps {
  thumbnails: travelPageRouteObject[];
}

function Travel({ thumbnails }: travelProps) {
  return (
    <div className="travel-container">
      <div className="preview-section" id="2022">
        {thumbnails.map((obj: travelPageRouteObject) => (
          <Link to={`${pages.travel}${obj.path}`}>
            <AlbumPreview {...obj.albumPreview} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Travel;
