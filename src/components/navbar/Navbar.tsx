import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pages } from '../../util/types';

import './Navbar.scss';

interface navBarProps {
  Link: any;
  pathname: string;
  clickHome: Function;
  hasClickedHome: boolean;
}
function Navbar({ Link, clickHome, pathname, hasClickedHome }: navBarProps) {
  const [isHovered, isHoveringOn] = useState('');

  const isHoveringOnNav = (page: any) => {
    isHoveringOn(page);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hoveringCallback = useCallback(
    // Wait 200 ms before applying onHover animation to prevent rapid flickering
    debounce((page) => isHoveringOnNav(page), 200),
    []
  );

  let travelTitle = pages.travel.substring(1);
  if (pathname.includes(`${travelTitle}/`)) {
    const album = pathname.slice(pathname.lastIndexOf('/'));
    travelTitle = album.substring(1);
  } else {
    travelTitle = 'albums';
  }

  // Check if a subroute is active for travel

  return (
    <ul>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            hasClickedHome && pathname === pages.home
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li className="nav-row">
        <Link
          to="/"
          onClick={() => clickHome && clickHome()}
          onMouseEnter={() => hoveringCallback(pages.home)}
          onMouseLeave={() => hoveringCallback('')}
          className={`right-spacing ${
            hasClickedHome && pathname === pages.home ? 'current-page' : ''
          } ${
            pathname === pages.home && isHovered && isHovered !== pages.home
              ? 'half-opacity'
              : ''
          }`}
        >
          home
        </Link>
        {hasClickedHome && pathname === pages.home && (
          <div className="banner-text">Home</div>
        )}
      </li>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            pathname === pages.about ||
            (pathname === pages.home && hasClickedHome)
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li className="nav-row">
        <Link
          to="/about"
          onMouseEnter={() => hoveringCallback(pages.about)}
          onMouseLeave={() => hoveringCallback('')}
          className={`right-spacing ${
            pathname === pages.about ? 'current-page' : ''
          } ${
            pathname === pages.about && isHovered && isHovered !== pages.about
              ? 'half-opacity'
              : ''
          }`}
        >
          About
        </Link>
        {pathname === pages.about && <div className="banner-text">About</div>}
      </li>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            pathname === pages.about || pathname.includes(pages.travel)
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li className="nav-row">
        <Link
          to="/travel"
          onMouseEnter={() => hoveringCallback(pages.travel)}
          onMouseLeave={() => hoveringCallback('')}
          className={`travel-spacing ${
            pathname.includes(pages.travel) ? 'current-page' : ''
          } ${
            pathname === pages.travel && isHovered && isHovered !== pages.travel
              ? 'half-opacity'
              : ''
          }`}
        >
          Travel
        </Link>
        {pathname.includes(pages.travel) && (
          <div className="banner-text">{travelTitle}</div>
        )}
      </li>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            pathname.includes(pages.travel) || pathname === pages.books
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li className="nav-row">
        <Link
          to="/books"
          onMouseEnter={() => hoveringCallback(pages.books)}
          onMouseLeave={() => hoveringCallback('')}
          className={`right-spacing ${
            pathname === pages.books ? 'current-page' : ''
          } ${
            pathname === pages.books && isHovered && isHovered !== pages.books
              ? 'half-opacity'
              : ''
          }`}
        >
          Books
        </Link>
        {pathname === pages.books && <div className="banner-text">Books</div>}
      </li>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            pathname === pages.books || pathname === pages.contact
              ? 'show-hr animate'
              : 'hide-hr'
          }`}
        />
      </div>
      <li className="nav-row">
        <Link
          to="/contact"
          onMouseEnter={() => hoveringCallback(pages.contact)}
          onMouseLeave={() => hoveringCallback('')}
          className={`right-spacing ${
            pathname === pages.contact ? 'current-page' : ''
          } ${
            pathname === pages.contact &&
            isHovered &&
            isHovered !== pages.contact
              ? 'half-opacity'
              : ''
          }`}
        >
          Contact
        </Link>
        {pathname === pages.contact && (
          <div className="banner-text">Contact</div>
        )}
      </li>
      <div className="hr-container">
        <hr
          className={`hr-settings ${
            pathname === pages.contact ? 'show-hr animate' : 'hide-hr'
          }`}
        />
      </div>
    </ul>
  );
}

export default Navbar;
