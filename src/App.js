import styled from 'styled-components';
import PlayingField from './components/PlayingField';
import Panel from './components/Panel';
import React, {useState} from 'react';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`

function App() {

  const [numbers, setNumbers] = useState(Array.from({length: 16}).map((_, i) => i < 15 ?  i+1 : null));
  const [cells, setCell] = useState(numbers.map((i) => ({value: i})));

  const mixingArray = () => {
      const array = Array.from({length: 16}).map((_, i) => i < 15 ? i + 1 : null);

      const left = -1;
      const right = 1;
      const top = -4;
      const bottom = 4;

      const countShuffle = 10000;

      for (let i = 0; i < countShuffle; i++) {
        let shuffleOption = [];
        const indexNull = array.indexOf(null);

        if (indexNull > 3) {
          shuffleOption.push(top);
        } 

        if (indexNull < 12) {
          shuffleOption.push(bottom);
        } 
        
        if (indexNull % 4 !== 0) {
          shuffleOption.push(left);
        } 

        if (indexNull % 4 !== 3) {
          shuffleOption.push(right);
        } 
        
        const indexShuffleOption = Math.floor(Math.random() * shuffleOption.length);
        const indexRandomCell = shuffleOption[indexShuffleOption];

        array[indexNull] = array[indexNull + indexRandomCell];
        array[indexNull + indexRandomCell] = null;
      }

      return array;
  }

  const handlerChangeState = (array) => {
    const Cell = array.map((i) => ({value: i}));
    setNumbers(array);
    setCell(Cell);
}


  return (
    <AppContainer>
      <Panel 
        onNewGameRequest={mixingArray}
        onStateChange={handlerChangeState}
      />
      <PlayingField 
        numbers={numbers}
        cells={cells}
        setCell={setCell}
        setNumbers={setNumbers}
        onStateChange={handlerChangeState}
      />
    </AppContainer>
  );
}

export default App;
