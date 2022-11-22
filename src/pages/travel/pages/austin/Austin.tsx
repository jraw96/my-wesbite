import MyGallery from '../../../../components/Gallery/gallery';
import { austinList } from './albumLists';
import './Austin.scss';
function Austin() {
  return (
    <div className="travel-album-container">
      <h2 className="title">Austin </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={austinList.austin} />
      </div>
    </div>
  );
}

export default Austin;
