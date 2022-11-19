/* eslint-disable jsx-a11y/alt-text */
import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';
import { photoItem } from '../../util/types';

// Source: https://github.com/dromru/react-photoswipe-gallery
// Demo of photoswipe: https://dromru.github.io/react-photoswipe-gallery/?path=/story/demo-basic--basic

export interface gridCSS {
  display: string;
  gridTemplateColumns: string;
  gridTemplateRows: any;
  gridGap: number;
}

interface props {
  photos: photoItem[];
  grid: gridCSS;
}

function MyGallery({ photos, grid }: props) {
  return (
    <>
      <Gallery>
        <div style={{ ...grid }}>
          {photos.map((photo: photoItem) => {
            return (
              <Item {...photo}>
                {({ ref, open }) => (
                  <img
                    style={{ cursor: 'pointer', width: photo.thumbnailWidth }}
                    src={photo.original}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            );
          })}
        </div>
      </Gallery>
    </>
  );
}

export default MyGallery;

// Bakcup:
/*
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  };



 <Gallery>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 271px 171px',
            gridTemplateRows: '114px 114px',
            gridGap: 12,
          }}
        >
          <Item
            original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
            thumbnail="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
            width="1600"
            height="1600"
            alt="Photo of seashore by Folkert Gorter"
          >
            {({ ref, open }) => (
              <img
                style={{ cursor: 'pointer' }}
                src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
            thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
            width="1600"
            height="1068"
            alt="Photo of mountain lake by Samuel Rohl"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
            thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
            width="1600"
            height="1066"
            alt="Photo of fog in the village by Ales Krivec"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
            thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
            width="1600"
            height="1066"
            alt="Photo of river sunset by Michael Hull"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
            thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
            width="1600"
            height="1066"
            alt="Photo of bear by Thomas Lefebvre"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </Gallery>
      */
