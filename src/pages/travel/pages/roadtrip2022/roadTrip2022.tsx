import MyGallery from '../../../../components/Gallery/gallery';
import { roadTrip2022List } from './albumLists';
import './roadTrip2022.scss';

function RoadTrip2022() {
  return (
    <div className="travel-album-container">
      <h2 className="title">Grand Canyon </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.grandCanyon} />
      </div>

      <h2 className="title">Monument Valley </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.monumentValley} />
      </div>

      <h2 className="title">Canyonlands </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.canyonLands} />
      </div>

      <h2 className="title">Arches</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.arches} />
      </div>

      <h2 className="title">Dead Horse</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.deadHorse} />
      </div>
      <h2 className="title">Bryce Canyon</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.bryceCanyon} />
      </div>

      <h2 className="title">Zion</h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.zion} />
      </div>

      <h2 className="title">Yosemite </h2>
      <div className="gallery-wrapper">
        <MyGallery photos={roadTrip2022List.yosemite} />
      </div>
    </div>
  );
}

export default RoadTrip2022;
