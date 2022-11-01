import styled from "styled-components";

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

export default Panel;


