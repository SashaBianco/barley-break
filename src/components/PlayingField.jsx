import styled from 'styled-components';
import Cell from './Cell';

const Container = styled.div`
    width: 600px;
    height: 600px;
    border: 2px solid #000;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
`;

const PlayingField = (props) => {

    return (
        <Container>
            {props.cells.map(cell =>
                <Cell 
                    cell = {cell} 
                    key = {cell.value}
                    numbers = {props.numbers} 
                    setNumbers = {props.setNumbers} 
                    setCell = {props.setCell}
                />
            )}
        </Container>
            
    )
}

export default PlayingField;