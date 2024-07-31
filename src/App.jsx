import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import DetailNyoman from './pages/DetailNyoman';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/i_nyoman_sutjidra" element={<DetailNyoman />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;