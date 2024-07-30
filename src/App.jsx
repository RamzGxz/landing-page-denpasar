import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPages />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;