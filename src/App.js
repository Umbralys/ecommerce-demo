import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EcommerceHome from './components/EcommerceHome';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<EcommerceHome />} />
      </Routes>
    </Router>
  );
}

export default App;
