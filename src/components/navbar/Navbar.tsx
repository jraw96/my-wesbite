import React, { useState } from 'react';

import './Navbar.scss';

function Navbar() {
  const [activePage, setPage] = useState('');
  const [isHovered, isHoveringOn] = useState('');

  enum pages {
    home = 'home',
    about = 'about',
    travel = 'travel',
    books = 'books',
  }

  const clickedNavButton = (page: pages) => {
    setPage(page);
  };

  return (
    <ul>
      <div className="hr-container">
        <hr />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.home)}
          onMouseEnter={() => isHoveringOn(pages.home)}
          onMouseLeave={() => isHoveringOn('')}
          className={`${activePage === pages.home ? 'current-page' : ''} ${
            activePage === pages.home && isHovered && isHovered !== pages.home
              ? 'half-opacity'
              : ''
          }`}
          href="#home"
        >
          home
        </a>
      </li>
      <div className="hr-container">
        <hr />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.about)}
          onMouseEnter={() => isHoveringOn(pages.about)}
          onMouseLeave={() => isHoveringOn('')}
          className={`${activePage === pages.about ? 'current-page' : ''} ${
            activePage === pages.about && isHovered && isHovered !== pages.about
              ? 'half-opacity'
              : ''
          }`}
          href="#about"
        >
          About
        </a>
      </li>
      <div className="hr-container">
        <hr />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.travel)}
          onMouseEnter={() => isHoveringOn(pages.travel)}
          onMouseLeave={() => isHoveringOn('')}
          className={`${activePage === pages.travel ? 'current-page' : ''} ${
            activePage === pages.travel &&
            isHovered &&
            isHovered !== pages.travel
              ? 'half-opacity'
              : ''
          }`}
          href="#travel"
        >
          Travel
        </a>
      </li>
      <div className="hr-container">
        <hr />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.books)}
          onMouseEnter={() => isHoveringOn(pages.books)}
          onMouseLeave={() => isHoveringOn('')}
          className={`${activePage === pages.books ? 'current-page' : ''} ${
            activePage === pages.books && isHovered && isHovered !== pages.books
              ? 'half-opacity'
              : ''
          }`}
          href="#books"
        >
          Books
        </a>
      </li>
      <div className="hr-container">
        <hr />
      </div>
    </ul>
  );
}

export default Navbar;
