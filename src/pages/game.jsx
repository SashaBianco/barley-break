import styled from 'styled-components';
import PlayingField from '../components/PlayingField';
import React, {useState} from 'react';
import Counter from "../components/Counter";
import { Link } from 'react-router-dom';


const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`

const Back = styled.a`
    position: absolute;
    top: 32px;
    left: 32px;
    padding: 16px;
    color: #469597;
    border-radius: 4px;
    &:hover {
      outline: 1px solid #469597;
    }

    &::before {
      content: '←';
      padding-right: 8px;
    }
`;


function Game(props) {
  const winCombination = Array.from({length: 16}).map((_, i) => i < 15 ?  i+1 : null);
  const [cells, setCells] = useState(props.combination.map((i) => ({value: i})));
  const [stepCounter, setStepCounter] = useState(0);

  

  
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

  const getArray = (value) => {
    let array = [...props.combination];
    let arrayCopy = [...props.combination];
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
      props.onStateCombination(array);
      setCells(Cell);
  }

  const getValueCell = (value) => {
    const array = getArray(value);
    handlerChangeState(array);
  }

 

  const checkResult = (array, arrayCurrent) => {
    let isEqual = JSON.stringify(array) == JSON.stringify(arrayCurrent);
    if (isEqual) {
      console.log('you win');
    }
  }

  return (
    <AppContainer>
      <Counter 
          value = {stepCounter}
      />
      
        <Link to='/home'>
          <Back>Back</Back>
        </Link>
      
      <PlayingField
          cells={cells}
          getValueCell={getValueCell}
      />

  
    </AppContainer>
  );
}

export default Game;
