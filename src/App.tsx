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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/books" element={<Books />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
