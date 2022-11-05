import React from 'react';
import './Home.scss';
import vanPic from '../../assets/home/vanpic.jpeg';

interface props {
  show: boolean;
}

function Home({ show }: props) {
  return (
    <>
      {show && (
        <div className="home-container">
          <div className="image-container">
            <img
              className="img-specs"
              src={vanPic}
              alt="Jake in Van, at Guadeloupe Mountains"
              width="400"
            />
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
