import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { Route, Link, Routes, useLocation } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Travel from './pages/travel/Travel';
import Books from './pages/books/Books';
import Contact from './pages/contact/Contact';
import { pages, travelPageRouteObject, travelRoutes } from './util/types';
import France from './pages/travel/pages/france/France';
import RoadTrip2022 from './pages/travel/pages/roadtrip2022/roadTrip2022';
import SanFrancisco from './pages/travel/pages/sanFrancisco/SanFrancisco';
import Austin from './pages/travel/pages/austin/Austin';
import Miami from './pages/travel/pages/miami/Miami';
import Toronto from './pages/travel/pages/toronto/Toronto';
import Vietnam from './pages/travel/pages/vietnam/Vietnam';
import WestTexas from './pages/travel/pages/westTexas/WestTexas';

function App() {
  const [hasClickedHome, clickedHome] = useState(false);

  // Current URL pathname
  const pathname = useLocation()?.pathname;
  const showColumnThing =
    hasClickedHome || (pathname && pathname !== pages.home);

  // Based on the current route, load the respective album component
  const getAlbum = (obj: travelPageRouteObject) => {
    switch (obj.path) {
      case '/france':
        return <France />;
      case '/austin':
        return <Austin />;
      case '/miami':
        return <Miami />;
      case '/vietnam':
        return <Vietnam />;
      case '/toronto':
        return <Toronto />;
      case '/roadtrip-2022':
        return <RoadTrip2022 />;
      case '/west-texas':
        return <WestTexas />;
      case '/san-francisco':
        return <SanFrancisco />;
    }
  };

  return (
    <div className="app-container">
      <div className="nav-container">
        <Navbar
          Link={Link}
          pathname={pathname}
          clickHome={() => clickedHome(true)}
          hasClickedHome={hasClickedHome}
        />
      </div>
      <div className="top-container">
        {/* Conditionally display pages in the top section, for large desktop screens */}

        <div className="desktop-home">
          <Routes>
            <Route path={pages.home} element={<Home show={hasClickedHome} />} />
          </Routes>
        </div>
        <div className="desktop-about">
          <Routes>
            <Route path={pages.about} element={<About />} />
          </Routes>
        </div>
        <Routes>
          <Route path={pages.contact} element={<Contact />} />
        </Routes>
      </div>
      <div className="divider-container"></div>
      <div className="page-container">
        {/* Conditionally display pages in the lower section, based on screen size */}

        <div className="mobile-home">
          <Routes>
            <Route path={pages.home} element={<Home show={hasClickedHome} />} />
          </Routes>
        </div>
        <div className="mobile-about">
          <Routes>
            <Route path={pages.about} element={<About />} />
          </Routes>
        </div>

        {/* Travel Album content - eg. travel/austin  */}
        <Routes>
          <Route path={pages.contact} element={<Contact />} />
          <Route
            path={pages.travel}
            element={<Travel thumbnails={travelRoutes} />}
          />
          {travelRoutes.map((obj: travelPageRouteObject) => {
            const pathname = `${pages.travel}${obj.path}`;
            return <Route path={pathname} element={getAlbum(obj)} />;
          })}
          <Route path={pages.books} element={<Books />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
