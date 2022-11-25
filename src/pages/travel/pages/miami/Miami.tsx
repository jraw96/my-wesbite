import MyGallery from '../../../../components/Gallery/gallery';
import { miamiList } from './albumLists';
// import './Miami.scss';

function Miami() {
  return (
    <div className="travel-album-container">
      <h2 className="title">Miami </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={miamiList.miami} />
      </div>
    </div>
  );
}

export default Miami;
