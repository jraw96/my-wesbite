import React from 'react';
import './Home.scss';

interface homeProps {
  show?: boolean;
}

function Home({ show }: homeProps) {
  return (
    <>
      {show && (
        <div className="home-container">
          <h1>Home</h1>
        </div>
      )}
    </>
  );
}

export default Home;
