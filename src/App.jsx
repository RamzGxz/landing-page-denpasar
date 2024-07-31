import React from 'react';

import RekapKegiatan from './components/rekapKegiatan.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import DetailGede from './pages/DetailGede';
import DetailNyoman from './pages/DetailNyoman';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/GedeSupriatna" element={<DetailGede/>} />
      <Route path="/i_nyoman_sutjidra" element={<DetailNyoman />} />
     </Routes>
    </BrowserRouter>

  );
};

export default App;