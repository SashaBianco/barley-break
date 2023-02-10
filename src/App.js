import React, {useState, useEffect} from 'react';
import Game from './pages/game'
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Home from './pages/home';

function App() {
  const defaultCombination = Array.from({length: 16}).map((_, i) => i < 15 ? i + 1 : null);
  const [combination, setCombination] = useState( () => {
    return JSON.parse(localStorage.getItem("combination")) || defaultCombination;
  });

  useEffect( () => {
    localStorage.setItem('combination', JSON.stringify(combination));
  }, [combination])


  return (
    <BrowserRouter basename='/barley-break'>
      <Routes>
          <Route 
              path="*" 
              element={
                <Home 
                  onChangeCombination={setCombination}
                  combination={combination}
                />
              }    
          /> 
          <Route 
              path="/game" 
              element={
                <Game 
                  combination={combination}
                  onChangeCombination={setCombination}
                  defaultCombination={defaultCombination}
                />
              }   
          /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
