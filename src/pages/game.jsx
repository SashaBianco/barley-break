import styled from 'styled-components';
import PlayingField from '../components/PlayingField';
import Panel from '../components/Panel';
import React, {useState} from 'react';
import DifficultyLevel from "../components/DifficultyLevel";
import Counter from "../components/Counter";


const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`

function Game() {
  const winCombination = Array.from({length: 16}).map((_, i) => i < 15 ?  i+1 : null);

  const [numbers, setNumbers] = useState(winCombination);
  const [cells, setCells] = useState(numbers.map((i) => ({value: i})));
  const [stepCounter, setStepCounter] = useState(0);
  const [countShuffle, setCountShuffle] = useState(50);
  

  
  const changeCount = () => {
      setStepCounter(stepCounter + 1);
  }

  const compareArr = (first, second) => {
      let isEqual = true;
      for (let i = 0; i < first.length; i++) {
          if (first[i] !== second[i]) {
              isEqual = false;
              break;
          }
      }

      if (!isEqual) {
        changeCount();
      }
  }

  const mixingArray = () => {
      const array = Array.from({length: 16}).map((_, i) => i < 15 ? i + 1 : null);

      const left = -1;
      const right = 1;
      const top = -4;
      const bottom = 4;

      for (let i = 0; i < countShuffle; i++) {
          let shuffleOption = [];
          const indexNull = array.indexOf(null);

          if (indexNull > 3) {shuffleOption.push(top)};
          if (indexNull < 12) {shuffleOption.push(bottom)};
          if (indexNull % 4 !== 0) {shuffleOption.push(left)};
          if (indexNull % 4 !== 3) {shuffleOption.push(right)}; 
          
          const indexShuffleOption = Math.floor(Math.random() * shuffleOption.length);
          const indexRandomCell = shuffleOption[indexShuffleOption];

          array[indexNull] = array[indexNull + indexRandomCell];
          array[indexNull + indexRandomCell] = null;
      }

      return array;
  }

  const getArray = (value) => {
    let array = [...numbers];
    let arrayCopy = [...numbers];
    let index = array.indexOf(value);
    let leftValues = array.slice(0, index);
    let rightValues = array.slice(index + 1);

    const leftIndex = index - 1;
    const topIndex = index - 4;
    const bottomIndex = index + 4;
    const rightIndex = index + 1;

    if (array[rightIndex] === null && rightIndex % 4 !== 0) {
        leftValues.push(null);
        rightValues[0] = array[index];
        array = leftValues.concat(rightValues);
    }
    
    if (array[leftIndex] === null && leftIndex % 4 !== 3) {
        leftValues = array.slice(0, leftIndex);
        leftValues.push(array[index], null);
        array = leftValues.concat(rightValues);
    }
    
    if (array[bottomIndex] === null) {
        leftValues.push(null);
        rightValues[rightValues.indexOf(null)] = array[index];
        array = leftValues.concat(rightValues);
    }

    if (array[topIndex] === null)  {
        leftValues[leftValues.indexOf(null)] = array[index];
        leftValues.push(null);
        array = leftValues.concat(rightValues);
    }

    compareArr(array, arrayCopy);
    checkResult(winCombination, array);
    
    return array;
  }

  const handlerChangeState = (array) => {
      const Cell = array.map((i) => ({value: i}));
      setNumbers(array);
      setCells(Cell);
  }

  const getValueCell = (value) => {
    const array = getArray(value);
    handlerChangeState(array);
  }

  const getNewGame = () => {
    const array = mixingArray();
    handlerChangeState(array);
    setStepCounter(0);
  }

  const getCountShuffle = (difficulty) => {
      if (difficulty === 'easy') {setCountShuffle(50)};
      if (difficulty === 'medium') {setCountShuffle(100)};
      if (difficulty === 'hard') {setCountShuffle(300)};
  }


  const checkResult = (array, arrayCurrent) => {
    let isEqual = JSON.stringify(array) == JSON.stringify(arrayCurrent);
    if (isEqual) {
      console.log('you win');
    }
  }

  return (
    <AppContainer>
      <DifficultyLevel 
          onStateCountShuffle = {getCountShuffle}
          getCountShuffle={getCountShuffle}
      />
      <Counter 
          value = {stepCounter}
      />
      
      <PlayingField
          cells={cells}
          getValueCell={getValueCell}
      />

      <Panel 
          onNewGameRequest={getNewGame}
      />
    </AppContainer>
  );
}

export default Game;
