import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';

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

  const isHoveringOnNav = (page: any) => {
    isHoveringOn(page);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hoveringCallback = useCallback(
    debounce((page) => isHoveringOnNav(page), 300),
    []
  );

  return (
    <ul>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            activePage === pages.home ? 'show-hr animate' : 'hide-hr'
          }`}
        />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.home)}
          onMouseEnter={() => hoveringCallback(pages.home)}
          onMouseLeave={() => hoveringCallback('')}
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
        <hr
          className={`hr-settings ${
            activePage === pages.about || activePage === pages.home
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.about)}
          onMouseEnter={() => hoveringCallback(pages.about)}
          onMouseLeave={() => hoveringCallback('')}
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
        <hr
          className={`hr-settings ${
            activePage === pages.about || activePage === pages.travel
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.travel)}
          onMouseEnter={() => hoveringCallback(pages.travel)}
          onMouseLeave={() => hoveringCallback('')}
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
        <hr
          className={`hr-settings ${
            activePage === pages.travel || activePage === pages.books
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li>
        <a
          onClick={() => clickedNavButton(pages.books)}
          onMouseEnter={() => hoveringCallback(pages.books)}
          onMouseLeave={() => hoveringCallback('')}
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
        <hr
          className={`hr-settings ${
            activePage === pages.books ? 'show-hr animate' : 'hide-hr'
          }`}
        />
      </div>
    </ul>
  );
}

export default Navbar;
