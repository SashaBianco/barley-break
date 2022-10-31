import styled from 'styled-components';
import React from 'react';


const Field = styled.div`
border 1px solid gray;
display: flex;
justify-content: center;
align-items: center;
font-size: 4em;
background: #f2f2f2;
cursor: pointer;
`;


const Cell = (props) => {
    const getCurrentArray = () => {
        let array = [...props.numbers];
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
        
        return array;
    }
    

    const handlerCellChange = ({setNumbers}) => {
        let newArray = getCurrentArray();
        props.setNumbers(newArray);

        let newCell = [
            {value: newArray[0]},
            {value: newArray[1]},
            {value: newArray[2]},
            {value: newArray[3]},
            {value: newArray[4]},
            {value: newArray[5]},
            {value: newArray[6]},
            {value: newArray[7]},
            {value: newArray[8]},
            {value: newArray[9]},
            {value: newArray[10]},
            {value: newArray[11]},
            {value: newArray[12]},
            {value: newArray[13]},
            {value: newArray[14]},
            {value: newArray[15]},
        ]
        props.setCell(newCell);

    }
    return (
        <Field
            onClick={handlerCellChange}
        >
            {props.cell.value}
        </Field> 
        
    )
    
}

export default Cell;