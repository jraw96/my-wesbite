import MyGallery from '../../../../components/Gallery/gallery';
import { vietnamList } from './albumLists';
import './Vietnam.scss';

function Vietnam() {
  return (
    <div className="travel-album-container">
      <h2 className="title">Hanoi </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={vietnamList.hanoi} />
      </div>
      <h2 className="title">Hạ Long Bay </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={vietnamList.haLongBay} />
      </div>
      <h2 className="title">Hà Giang</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={vietnamList.haGiang} />
      </div>
      <h2 className="title">Phong Nha</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={vietnamList.phongNa} />
      </div>
      <h2 className="title">Hue</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={vietnamList.hue} />
      </div>
      <h2 className="title">Hội An</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={vietnamList.hoiAnn} />
      </div>
      <h2 className="title">Saigon</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={vietnamList.saigon} />
      </div>
    </div>
  );
}

export default Vietnam;
