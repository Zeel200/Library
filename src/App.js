import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './index.css';
import Nav from './components/Nav.jsx';
import Home from './pages/home.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route
            path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
