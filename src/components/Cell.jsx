import styled from 'styled-components';


const Field = styled.div`
border 1px solid gray;
display: flex;
justify-content: center;
align-items: center;
font-size: 4em;
background: #f2f2f2;
cursor: pointer;
`;

const getMessage = (event) => {
    console.log(event.target);
}

const Cell = (props) => {
    return (
        <Field
            onClick={getMessage}
        >
            {props.cell.value}
        </Field> 
    )
}

export default Cell;