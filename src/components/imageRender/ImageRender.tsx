import React, { useEffect, useState } from 'react';
import './ImageRender.scss';

export interface imageProps {
  src: string;
  alt: string;
  width: number;
  title?: string;
  link?: string;
  onHover?: boolean;
}

/**
 * App wide image component
 */
function ImageRender({ src, alt, width, title, onHover, link }: imageProps) {
  const [imgSrc, setImgSrc] = useState<any>(undefined);
  const [hovering, setHovering] = useState(false);
  const [shown, show] = useState(false);

  // Apply the loading css until the image fully
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <div className="img-container" style={{ width: `${width}px` }}>
      {imgSrc ? (
        <div
          onMouseEnter={() => {
            setHovering(true);
            show(true);
          }}
          onMouseLeave={() => setHovering(false)}
          onClick={() => {
            if (link) {
              window.location.href = link;
            }
          }}
        >
          <img
            className={`img-specs ${hovering ? 'image-hover' : ''}`}
            src={imgSrc}
            alt={alt}
            width={width}
          />
          {title && shown && (
            <p className={`title-text ${hovering ? 'block-text-hover' : ''}`}>
              {title}
            </p>
          )}
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

export default ImageRender;
