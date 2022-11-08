import './Home.scss';
import {
  France2019Images,
  HomeImages,
  Vietnam2019Images,
} from '../../util/images-urls';
import ImageRenderer, {
  imageProps,
} from '../../components/Image/ImageRenderer';
interface props {
  show: boolean;
}

function Home({ show }: props) {
  // Van pic
  const imageProps1: imageProps = {
    src: HomeImages.vanPic,
    alt: 'Me leaning out of a van',
    width: 400,
  };

  // Paris pic
  const imageProps2: imageProps = {
    src: France2019Images.paris2,
    alt: 'Odette French Bakery',
    width: 400,
  };

  // Vietnam buncha pic
  const imageProps3: imageProps = {
    src: Vietnam2019Images.bunCha,
    alt: 'Bún chả',
    width: 400,
  };

  return (
    <>
      {show && (
        <div className="home-container">
          <div className="col">
            <div className="image-container">
              <ImageRenderer {...imageProps1} />
            </div>
          </div>
          <div className="col">
            <div className="content-container">
              <p className="first-sentence text">
                Hello, and welcome to my website!
              </p>
              <p className="text">
                Here you can find my latest travels and discussion about books
                I've read!
              </p>
              <p className="text">More content to come later.</p>
              <p className="text"> Cheers, </p>
              <p className="text">-Jake </p>
            </div>
            <div className="image-container">
              <ImageRenderer {...imageProps3} />
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <ImageRenderer {...imageProps2} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
