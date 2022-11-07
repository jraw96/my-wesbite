import './Home.scss';
import { HomeImages } from '../../util/images-urls';
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

  return (
    <>
      {show && (
        <div className="home-container">
          <div className="image-container">
            <ImageRenderer {...imageProps1} />
          </div>
          <div className="content-container">
            <p>Hello, and welcome to my website!</p>q
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
