import styled from 'styled-components';
import Cell from './Cell';

const Container = styled.div`
    width: 400px;
    height: 400px;
    border: 2px solid #469597;
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    padding: 8px;
    border-radius: 4px;
    background: white;
`;

const PlayingField = (props) => {

    return (
        <Container>
            {props.cells.map(cell =>
                <Cell 
                    value = {cell.value}
                    key = {cell.value}
                    getValueCell={props.getValueCell}
                />
            )}
        </Container>
            
    )
}

export default PlayingField;