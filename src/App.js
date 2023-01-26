import React from 'react';
import Game from './pages/game'
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game />}/> 
        <Route path="/home" element={<Home />}/> 
        <Route path ='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
