import './Home.scss';
import { HomeImages, Vietnam2019Images } from '../../util/images-urls';
import ImageRender, {
  imageProps,
} from '../../components/imageRender/ImageRender';
import { pages, TravelPageRoutes } from '../../util/types';
interface props {
  show: boolean;
}

function Home({ show }: props) {
  // Van pic
  const imageProps1: imageProps = {
    src: HomeImages.croppedVanPic,
    alt: 'Me leaning out of a van',
    width: 310,
    title: 'Driving to the Guadeloupe Mountains TX, USA - 2021',
    link: `${window.location.origin}${pages.travel}${TravelPageRoutes.westTexas}`,
    borderRadius: '10px',
  };

  // Vietnam buncha pic
  const imageProps3: imageProps = {
    src: Vietnam2019Images.bunCha,
    alt: 'Bún chả',
    width: 400,
    title: 'Bún Chả for dinner, Hanoi, VNM - 2019',
    link: `${window.location.origin}${pages.travel}${TravelPageRoutes.vietnam}`,
  };

  return (
    <>
      {
        <div className="home-container justify-home">
          <div className="col">
            <div className="image-container margin-img-home">
              <ImageRender {...imageProps1} />
            </div>
          </div>
          <div className="col">
            <div className="content-container mobile-home-spacing">
              <p className="first-sentence text">
                Hello, and welcome to my website.
              </p>
              <p className="text">
                Here you can find my latest travels and discussion about books
                I've read.
              </p>
              <p className="text">More content to come later.</p>
              <p className="text"> Cheers, </p>
              <p className="text">-Jake </p>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Home;
