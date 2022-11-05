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
              src={vanPic}
              alt="Jake in Van, at Guadeloupe Mountains"
              width="500"
            />
          </div>
          <div className="contentContainer">
            <p>Hello, and welcome to my website!</p>q
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
