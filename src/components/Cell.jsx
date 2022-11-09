import styled from 'styled-components';
import React from 'react';


const Field = styled.div`
border: 1px solid #b6c2b7;
display: flex;
justify-content: center;
align-items: center;
font-size: 3em;
background: #e8f5e9;
margin: 2px;
cursor: pointer;
border-radius: 4px;
&:hover {
    background: #c8e6c9;
}
`;

const Cell = (props) => {
    const handleClick = () => {
        props.getValueCell(props.value);
    };

    return (
        <Field
            onClick={handleClick}
        >
            {props.value}
        </Field> 
        
    )
    
}

export default Cell;