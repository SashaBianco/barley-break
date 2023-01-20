import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    margin: 20px;
    flex-direction: column;
`

const Button = styled.button`
    width: 420px;
    height: 60px;
    border: 1px solid #469597;
    cursor: pointer;
    background: #469597;
    color: #fff;
    border-radius: 4px;
    font-size: 1.5em;
    box-shadow: 0px 3px 10px 2px #b6c2b7;

    
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


