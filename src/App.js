import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav.jsx';
import Home from './pages/home.jsx';
import Books from './pages/Books.jsx';
import { books } from './data.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

