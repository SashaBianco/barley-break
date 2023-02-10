import styled from 'styled-components';
import Cell from './Cell';

const Container = styled.div`
    width: 350px;
    height: 350px;
    border: 2px solid #469597;
    display: grid;
    grid-template-columns: repeat(4,84.5px);
    padding: 4px;
    border-radius: 4px;
    background: white;
    @media (min-width: 768px) {
        width: 400px;
        height: 400px;
        grid-template-columns: repeat(4,97px);
    }
`;

const PlayingField = (props) => {

    return (
        <Container>
            {props.cells.map(cell =>
                <Cell 
                    value = {cell.value}
                    key = {cell.value}
                    onRedrawField={props.redrawField}
                />
            )}
        </Container>
            
    )
}

export default PlayingField;
