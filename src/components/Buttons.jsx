import styled from "styled-components";

const Button = styled.button`
    width: 200px;
    height: 40px;
    border: 1px solid gray;
    cursor: pointer;
    margin-bottom: 20px;
`



const Buttons = (props) => {

    const mixingArray = () => {
        return props.numbers.map(i => [Math.random(), i]).sort().map(i => i[1]);
    }

    const getDataForNewGame = () => {
        const array = mixingArray();
        const newCell = [
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
        props.setNumbers(array);
        props.setCell(newCell);
    }
    
    return (
        <div>
            <Button
                onClick={getDataForNewGame}
            >
                Новая игра
            </Button>
        </div>
    ) 
}

export default Buttons;


