import MyGallery from '../../../../components/Gallery/gallery';
import { franceList } from './albumLists';
import './France.scss';

function France() {
  return (
    <div className="travel-album-container">
      <h2 className="title">Paris </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={franceList.paris} />
      </div>

      <h2 className="title">Annecy </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={franceList.annecy} />
      </div>

      <h2 className="title">Nice </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={franceList.nice} />
      </div>

      <h2 className="title">Monaco </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={franceList.monaco} />
      </div>

      <h2 className="title">Saint Tropez </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={franceList.saintTropez} />
      </div>

      <h2 className="title">Bordeaux </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={franceList.bordeaux} />
      </div>
    </div>
  );
}

export default France;
