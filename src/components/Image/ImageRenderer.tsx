import React, { useEffect, useState } from 'react';
import './ImageRenderer.scss';

export interface imageProps {
  src: string;
  alt: string;
  width: number;
}

/**
 * App wide image component
 */
function ImageRenderer({ src, alt, width }: imageProps) {
  const [imgSrc, setImgSrc] = useState<any>(undefined);

  // Apply the loading css until the image fully
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <div className="loader-container" style={{ width: `${width}px` }}>
      {imgSrc ? (
        <div>
          <img
            className="img-specs loaded"
            src={imgSrc}
            alt={alt}
            width={width}
          />
        </div>
      ) : (
        <div
          className="loadingio-spinner-spin-xcd3odh6wnd"
          style={{ position: 'relative', top: `${width / 2 - 40}px` }}
        >
          <div className="ldio-kuwptfm2w3">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageRenderer;