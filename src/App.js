import styled from 'styled-components';
import PlayingField from './components/PlayingField';
import Buttons from './components/Buttons';
import React, {useState} from 'react';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`


function App() {

  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null]);
    const [cells, setCell] = useState([
        {value: numbers[0]},
        {value: numbers[1]},
        {value: numbers[2]},
        {value: numbers[3]},
        {value: numbers[4]},
        {value: numbers[5]},
        {value: numbers[6]},
        {value: numbers[7]},
        {value: numbers[8]},
        {value: numbers[9]},
        {value: numbers[10]},
        {value: numbers[11]},
        {value: numbers[12]},
        {value: numbers[13]},
        {value: numbers[14]},
        {value: numbers[15]},
    ])

  
  return (
    <AppContainer>
      <Buttons 
        numbers={numbers}
        setNumbers={setNumbers}
        setCell={setCell}
      />
      <PlayingField 
        numbers={numbers}
        cells={cells}
        setCell={setCell}
        setNumbers={setNumbers}
      />
    </AppContainer>
  );
}

export default App;
