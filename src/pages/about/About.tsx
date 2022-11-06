import './About.scss';

import mePic from '../../assets/about/me.jpg';
import { images } from '../../util/images-urls';

function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img
          className="img-specs"
          src={images.aboutMeYosemite}
          alt="Jake at Tunnel View, Yosemite"
          width="400"
        />
      </div>
      <div className="content-container">
        <p>Hello, and welcome to my website!</p>q
      </div>
    </div>
  );
}

export default About;
