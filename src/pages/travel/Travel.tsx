import React from 'react';
import './Travel.scss';

interface travelProps {
  show?: boolean;
}

function Travel({ show }: travelProps) {
  return (
    <>
      {show && (
        <div className="travel-container">
          <h1>Travel</h1>
        </div>
      )}
    </>
  );
}

export default Travel;
