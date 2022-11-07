import styled from "styled-components";
import DifficultyLevel from "./DifficultyLevel";
import Counter from "./Counter";

const Button = styled.button`
    width: 200px;
    height: 40px;
    border: 1px solid gray;
    cursor: pointer;
    margin-bottom: 20px;
`



const Panel = (props) => {
    
    const getDataForNewGame = () => {
        const array = props.onNewGameRequest();
        props.onStateChange(array);
        props.setCount(0);
    }
    
    return (
        <div>
            <Button
                onClick={getDataForNewGame}
            >
                Перемешать
            </Button>
            <DifficultyLevel 
                diffLevel = {props.diffLevel}
                onStateDiffLevel = {props.onStateDiffLevel}
                onStateCountShuffle = {props.onStateCountShuffle}
            />
            <Counter 
                value = {props.count}
            />
        </div>
    ) 
}

export default Panel;


