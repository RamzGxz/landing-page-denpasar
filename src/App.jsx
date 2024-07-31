import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import PojokDetail from './pages/PojokDetail';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPages />} />
    <Route path='/pojokdetail' element={<PojokDetail />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;