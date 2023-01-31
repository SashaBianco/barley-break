import { Link } from "react-router-dom";
import styled from "styled-components";
import SelectionDifficulty from '../components/SelectionDifficulty';
import React, { useState } from "react";


const Container = styled.div`
    width: 400px;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const H1 = styled.h1`
    padding-top: 150px;
    font-size: 4em;
`;

const Button = styled.button`
    height: 54px;
    width: 400px;
    background: none;
    border-radius: 4px;
    border: 1px solid #469597;
    cursor: pointer;
    background: #469597;
    color: #fff;
    font-size: 1.2em;
`;


const Home = (props) => {

    const [level, setLevel] = useState('easy');

    const getCountShuffle = () => {
        const valueForEasy = 100;
        const valueForMedium = 300;
        const valueForHard = 900;

        if (level === 'easy') {return valueForEasy};
        if (level === 'medium') {return valueForMedium};
        if (level === 'hard') {return valueForHard};
    }

    const mixingArray = (value) => {
        const array = Array.from({length: 16}).map((_, i) => i < 15 ? i + 1 : null);

        const left = -1;
        const right = 1;
        const top = -4;
        const bottom = 4;

        for (let i = 0; i < value; i++) {
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
  
    const getCombination = () => {
        let initialShuffleCount = getCountShuffle();
        let mixedCombination = mixingArray(initialShuffleCount);
        props.onStateCombination(mixedCombination);
    }
    
    const newGameStart = () => {
        getCombination()
    }

    return (
        <Container>
                <H1>Barley-break</H1>
                <SelectionDifficulty 
                    setLevel={setLevel}
                />
                <Link to='/game' onClick={newGameStart}>
                    <Button>New game</Button>
                </Link> 
                       
        </Container>
    );
}

export default Home;