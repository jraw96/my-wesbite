import { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import { photoItem } from '../../util/types';
import './gallery.scss';

// Example react-ohoto-gallery with lightbox"
// https://neptunian.github.io/react-photo-gallery/examples/lightbox.html

// Codepen example:
// https://codesandbox.io/s/react-photo-gallery-with-image-viewer-forked-c21wfp?file=/index.js:1058-1107

interface props {
  photos: photoItem[];
}

interface element {
  photo: any;
  index: number;
}

function MyGallery({ photos }: props) {
  // react-images helper functions
  const [currentImage, setCurrentImage] = useState<any>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: any, { photo, index }: element) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery-container">
      <Gallery photos={photos} margin={2} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x: any) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default MyGallery;
