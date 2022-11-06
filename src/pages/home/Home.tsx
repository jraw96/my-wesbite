import React, { useState } from 'react';
import './Home.scss';
import vanPic from '../../assets/home/vanpic.jpeg';
import { getShimmerContent } from '../../App';

import { Amplify } from 'aws-amplify';
import { AmplifyS3Image } from '@aws-amplify/ui-react/legacy';
// import awsconfig from './aws-exports';

// Amplify.configure(awsconfig);

interface props {
  show: boolean;
}

function Home({ show }: props) {
  const [image1, hasLoaded1] = useState(false);

  return (
    <>
      {show && (
        <div className="home-container">
          <div className="image-container wrapper">
            <img
              className={`img-specs ${
                image1 ? '' : 'animate image-placeholder'
              }`}
              src={vanPic}
              alt="Jake in Van, at Guadeloupe Mountains"
              width="400"
              onLoad={() => {
                setTimeout(() => {
                  console.log('has loaded');
                  hasLoaded1(true);
                }, 4000);
              }}
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
