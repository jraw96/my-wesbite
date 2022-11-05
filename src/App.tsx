import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Travel from './pages/travel/Travel';
import Books from './pages/books/Books';
import Contact from './pages/contact/Contact';

export enum pages {
  home = '/',
  about = '/about',
  travel = '/travel',
  books = '/books',
  contact = '/contact',
}

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
        <div className={`routes-container ${pathname}-positioning`}>
          <Routes>
            <Route path="/" element={<Home show={hasClickedHome} />} />
            <Route path="/about" element={<About />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
