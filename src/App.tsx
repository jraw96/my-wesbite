import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { Route, Link, Routes, useLocation } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Travel from './pages/travel/Travel';
import Books from './pages/books/Books';
import Contact from './pages/contact/Contact';
import TravelAlbum from './pages/travel-album/TravelAlbum';
import { pages, travelPageRouteObject, travelRoutes } from './util/types';

function App() {
  const [hasClickedHome, clickedHome] = useState(false);

  // Current URL pathname
  const pathname = useLocation()?.pathname;
  const showColumnThing =
    hasClickedHome || (pathname && pathname !== pages.home);

  return (
    <div className="app-container">
      <Navbar
        Link={Link}
        pathname={pathname}
        clickHome={() => clickedHome(true)}
        hasClickedHome={hasClickedHome}
      />
      <div className="page-container">
        <div
          className={`column-container ${showColumnThing ? 'show-column' : ''}`}
        ></div>
        <div className="separator-container">
          <h1>Contact</h1>
        </div>
        <div
          className={`routes-container ${pathname?.substring(1)}-positioning`}
        >
          <Routes>
            <Route path={pages.home} element={<Home show={hasClickedHome} />} />
            <Route path={pages.about} element={<About />} />
            <Route
              path={pages.travel}
              element={<Travel thumbnails={travelRoutes} />}
            />
            {/* Travel Album pages - eg. travel/austin  */}
            {travelRoutes.map((obj: travelPageRouteObject) => {
              const pathname = `${pages.travel}${obj.path}`;
              return (
                <Route
                  path={pathname}
                  element={<TravelAlbum title={obj.albumPreview.title} />}
                />
              );
            })}
            <Route path={pages.books} element={<Books />} />
            <Route path={pages.contact} element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
