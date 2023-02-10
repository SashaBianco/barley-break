import styled from 'styled-components';
import PlayingField from '../components/PlayingField';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import WinnerModal from '../components/WinnerModal';


const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`

const BackButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 16px;
  left: 8px;
  padding: 16px;
  color: #469597;
  border-radius: 4px;
  @media (min-width: 768px) {
    left:64px;
    top: 32px;
    font-size: 1.1em;
  }
  &:hover {
    outline: 1px solid #469597;
    cursor: pointer;
  }
  &::before {
    content: '←';
    padding-right: 8px;
  }
`;



function Game(props) {
  const [cells, setCells] = useState(props.combination.map((i) => ({value: i})));
  const [score, setScore] = useState( ()=> {
    return JSON.parse(localStorage.getItem("score")) || 0;
  });
  const [modal, setModal] = useState(false);

  useEffect( () => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score])
  

  const changeScore = (first, second) => {
      let isEqual = true;
      for (let i = 0; i < first.length; i++) {
          if (first[i] !== second[i]) {
              isEqual = false;
              break;
          }
      }
      if (!isEqual) {
        setScore(score + 1);
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

    changeScore(array, arrayCopy);
    checkResult(props.defaultCombination, array);

    return array;
  }


  const redrawField = (value) => {
    const array = getArray(value);
    const cell = array.map((i) => ({value: i}));
    props.onChangeCombination(array);
    setCells(cell);
  }

 

  const checkResult = (array, arrayCurrent) => {
    let isEqual = JSON.stringify(array) == JSON.stringify(arrayCurrent);
    if (isEqual) {
      setModal(true);
    }
  }

  const resetLocalStorage = () => {
    localStorage.clear();
  }

  return (
    <AppContainer>      
        <Link to='/home' onClick={resetLocalStorage}>
          <BackButton>Back</BackButton>
        </Link>
      <PlayingField
        cells={cells}
        redrawField={redrawField}
      />
     <WinnerModal
        modal={modal}
        onStateModale={setModal}
        value={score}
        onScoreChange={setScore}
        resetLocalStorage={resetLocalStorage}
     />
    </AppContainer>
  );
}

export default Game;
