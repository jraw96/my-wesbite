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
      <div className="divider-container">
        divider
        <div
          className={`column-container ${showColumnThing ? 'show-column' : ''}`}
        ></div>
        <div
          className={`routes-container ${pathname?.substring(1)}-positioning`}
        ></div>
      </div>
      <div className="top-container"></div>

      <div className="page-container">
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
            return <Route path={pathname} element={getAlbum(obj)} />;
          })}
          <Route path={pages.books} element={<Books />} />
          <Route path={pages.contact} element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
