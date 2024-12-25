import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav.jsx';
import Home from './pages/home.jsx';
import Books from './pages/Books.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
