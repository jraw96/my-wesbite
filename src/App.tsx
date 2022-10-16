import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Travel from './pages/travel/Travel';
import Books from './pages/books/Books';
import Contact from './pages/contact/Contact';

export enum pages {
  home = 'home',
  about = 'about',
  travel = 'travel',
  books = 'books',
  contact = 'contact',
}

function App() {
  const [activePage, setPage] = useState('');

  return (
    <div className="app-container">
      <Router>
        <Navbar Link={Link} setPage={setPage} activePage={activePage} />
        <div className="page-container">
          <div
            className={`column-container ${activePage ? 'show-column' : ''}`}
          ></div>
          <div className="separator-container">
            <h1>Contact</h1>
          </div>
          <div className="routes-container">
            <Routes>
              <Route
                path="/"
                element={<Home show={activePage === pages.home} />}
              />
              <Route
                path="/about"
                element={<About show={activePage === pages.about} />}
              />
              <Route
                path="/travel"
                element={<Travel show={activePage === pages.travel} />}
              />
              <Route
                path="/books"
                element={<Books show={activePage === pages.books} />}
              />
              <Route
                path="/contact"
                element={<Contact show={activePage === pages.contact} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
