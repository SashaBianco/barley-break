import styled from 'styled-components';
import Cell from './Cell';

const Container = styled.div`
    width: 400px;
    height: 400px;
    border: 2px solid #b6c2b7;
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    padding: 4px;
    box-shadow: 0px 3px 10px 2px #b6c2b7;
    border-radius: 4px;
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