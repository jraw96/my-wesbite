import React, { useState } from 'react';
import { TravelPageTitles } from '../../util/types';
import ImageRender, { imageProps } from '../imageRender/ImageRender';
import './albumPreview.scss';

export interface albumProps {
  imageProps: imageProps;
  title: TravelPageTitles;
}

function AlbumPreview({ title, imageProps }: albumProps) {
  const [hovered, isHovering] = useState(false);

  return (
    <div
      className={`album ${hovered ? 'image-hover' : ''}`}
      onMouseOver={() => {
        isHovering(true);
      }}
      onMouseLeave={() => {
        isHovering(false);
      }}
    >
      <ImageRender {...imageProps} />
      <h2 className={`${hovered ? 'hover-animation' : ''}`}>{title}</h2>
    </div>
  );
}

export default AlbumPreview;
