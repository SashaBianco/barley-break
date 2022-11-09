import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    margin: 20px;
    flex-direction: column;
`

const Button = styled.button`
    width: 412px;
    height: 50px;
    border: 1px solid #b6c2b7;
    cursor: pointer;
    background: #e8f5e9;
    color: #000000;
    border-radius: 4px;
    font-size: 1em;
    box-shadow: 0px 3px 10px 2px #b6c2b7;

    &:hover {
        background: #c8e6c9;
    }
`

const Panel = (props) => {
    return (
        <Container>
            <Button
                onClick={props.onNewGameRequest}
            >
                Перемешать
            </Button>  
        </Container>
    ) 
}

export default Panel;


