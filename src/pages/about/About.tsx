import React from 'react';
import './About.scss';

interface aboutProps {
  show?: boolean;
}

function About({ show }: aboutProps) {
  return (
    <>
      {show && (
        <div className="about-container">
          <h1>About</h1>
        </div>
      )}
    </>
  );
}

export default About;
