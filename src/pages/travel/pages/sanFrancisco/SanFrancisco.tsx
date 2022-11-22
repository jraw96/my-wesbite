import MyGallery from '../../../../components/Gallery/gallery';
import { sanFranList } from './albumLists';
import './SanFrancisco.scss';

function SanFrancisco() {
  return (
    <div className="travel-album-container">
      <h2 className="title">San Francisco </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={sanFranList.sanFran} />
      </div>
    </div>
  );
}

export default SanFrancisco;
