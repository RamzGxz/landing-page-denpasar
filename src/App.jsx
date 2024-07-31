import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import DetailGede from './pages/DetailGede';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPages />} />
    <Route path="/GedeSupriatna" element={<DetailGede/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;