import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import PojokDetail from './pages/PojokDetail';
import DetailGede from './pages/DetailGede';
import DetailNyoman from './pages/DetailNyoman';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPages />} />
    <Route path="/i_nyoman_sutjidra" element={<DetailNyoman />} />
    <Route path="/GedeSupriatna" element={<DetailGede/>} />
    <Route path='/pojokdetail' element={<PojokDetail />} />
    </Routes>
    </BrowserRouter>

  );
};

export default App;