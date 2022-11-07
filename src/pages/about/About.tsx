import './About.scss';
import { AboutImages } from '../../util/images-urls';
import ImageRenderer, {
  imageProps,
} from '../../components/Image/ImageRenderer';

function About() {
  // Posing infront of Yosmeite pic
  const imageProps1: imageProps = {
    src: AboutImages.meAtYosemite,
    alt: 'Jake at Tunnel View, Yosemite',
    width: 400,
  };

  return (
    <div className="about-container">
      <div className="image-container">
        <ImageRenderer {...imageProps1} />
      </div>
      <div className="content-container">
        <p>Hello, and welcome to my website!</p>q
      </div>
    </div>
  );
}

export default About;
