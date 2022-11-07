import styled from 'styled-components';
import React from 'react';


const Field = styled.div`
border: 1px solid gray;
display: flex;
justify-content: center;
align-items: center;
font-size: 4em;
background: #f2f2f2;
cursor: pointer;
`;

const Cell = (props) => {

    const compareArr = (array, array2) => {
        let isEqual = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== array2[i]) {
                isEqual = false;
                break;
            }
        }

        if (!isEqual) {
            props.onCountChange();
        }
    }
    
    const getCurrentArray = () => {
        let array = [...props.numbers];
        let arrayCopy = [...props.numbers];
        let index = props.numbers.indexOf(props.cell.value);
    
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

        return array;
    }

    const moveCell = () => {
        const array = getCurrentArray();
        props.onStateChange(array);
    }

    return (
        <Field
            onClick={moveCell}
        >
            {props.cell.value}
        </Field> 
        
    )
    
}

export default Cell;