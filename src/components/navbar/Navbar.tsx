import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { pages } from '../../App';

import './Navbar.scss';

interface navBarProps {
  Link: any;
  activePage: string;
  setPage: Function;
}
function Navbar({ Link, activePage, setPage }: navBarProps) {
  //const [activePage, setPage] = useState('');
  const [isHovered, isHoveringOn] = useState('');

  //const location = useLocation();
  //console.log('the location: ', location);

  const clickedNavButton = (page: pages) => {
    setPage(page);
  };

  const isHoveringOnNav = (page: any) => {
    isHoveringOn(page);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hoveringCallback = useCallback(
    debounce((page) => isHoveringOnNav(page), 200),
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
        <Link
          to="/"
          onClick={() => clickedNavButton(pages.home)}
          onMouseEnter={() => hoveringCallback(pages.home)}
          onMouseLeave={() => hoveringCallback('')}
          className={`${activePage === pages.home ? 'current-page' : ''} ${
            activePage === pages.home && isHovered && isHovered !== pages.home
              ? 'half-opacity'
              : ''
          }`}
        >
          home
        </Link>
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
        <Link
          to="/about"
          onClick={() => clickedNavButton(pages.about)}
          onMouseEnter={() => hoveringCallback(pages.about)}
          onMouseLeave={() => hoveringCallback('')}
          className={`${activePage === pages.about ? 'current-page' : ''} ${
            activePage === pages.about && isHovered && isHovered !== pages.about
              ? 'half-opacity'
              : ''
          }`}
        >
          About
        </Link>
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
        <Link
          to="/travel"
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
        >
          Travel
        </Link>
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
        <Link
          to="/books"
          onClick={() => clickedNavButton(pages.books)}
          onMouseEnter={() => hoveringCallback(pages.books)}
          onMouseLeave={() => hoveringCallback('')}
          className={`${activePage === pages.books ? 'current-page' : ''} ${
            activePage === pages.books && isHovered && isHovered !== pages.books
              ? 'half-opacity'
              : ''
          }`}
        >
          Books
        </Link>
      </li>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            activePage === pages.books || activePage === pages.contact
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li>
        <Link
          to="/contact"
          onClick={() => clickedNavButton(pages.contact)}
          onMouseEnter={() => hoveringCallback(pages.contact)}
          onMouseLeave={() => hoveringCallback('')}
          className={`${activePage === pages.contact ? 'current-page' : ''} ${
            activePage === pages.contact &&
            isHovered &&
            isHovered !== pages.contact
              ? 'half-opacity'
              : ''
          }`}
        >
          Contact
        </Link>
      </li>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            activePage === pages.contact ? 'show-hr animate' : 'hide-hr'
          }`}
        />
      </div>
    </ul>
  );
}

export default Navbar;
