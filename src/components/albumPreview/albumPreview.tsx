import React, { useState } from 'react';
import ImageRenderer, { imageProps } from '../Image/ImageRenderer';
import './albumPreview.scss';

interface props {
  imageProps: imageProps;
  title: string;
}

function AlbumPreview({ title, imageProps }: props) {
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
      <ImageRenderer {...imageProps} />
      <h2 className={`${hovered ? 'hover-animation' : ''}`}>{title}</h2>
    </div>
  );
}

export default AlbumPreview;
