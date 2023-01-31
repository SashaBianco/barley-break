import React, {useState} from 'react';
import Game from './pages/game'
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Home from './pages/home';



function App() {
  
  const [combination, setCombination] = useState(Array.from({length: 16}).map((_, i) => i < 15 ? i + 1 : null));

  return (
    <BrowserRouter>
      <Routes>
          <Route 
              path="*" 
              element={
                <Home 
                  onStateCombination={setCombination}
                  combination={combination}
                />
              }
              
          /> 
          <Route 
              path="/game" 
              element={
                <Game 
                  combination={combination}
                  onStateCombination={setCombination}
                />
              }   
          /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
