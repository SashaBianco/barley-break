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

  const mixingArray = () => {
      return numbers.map(i => [Math.random(), i]).sort().map(i => i[1]);
  }

  const handlerChangeState = (array) => {
    const Cell = [
        {value: array[0]},
        {value: array[1]},
        {value: array[2]},
        {value: array[3]},
        {value: array[4]},
        {value: array[5]},
        {value: array[6]},
        {value: array[7]},
        {value: array[8]},
        {value: array[9]},
        {value: array[10]},
        {value: array[11]},
        {value: array[12]},
        {value: array[13]},
        {value: array[14]},
        {value: array[15]},
    ]
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
