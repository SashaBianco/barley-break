import styled from 'styled-components';
import React from 'react';


const Field = styled.div`
    border: 1px solid #469597;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5em;
    margin: 4px;
    cursor: pointer;
    border-radius: 4px;
    color: #217074;
    user-select: none;
    @media (min-width: 768px) {
        font-size: 3em;
    }
    &:hover {
        background: rgba(91, 161, 153, 0.2);
        transition: all 0.7s ease;
    }
    
    ${ ({isEmpty})  =>  isEmpty   
                                ?   `
                                    background: none;
                                    border: none; 
                                    cursor: default;
                                    &:hover {
                                        background: none; 
                                    }'
                                    `
                                :  ''
    }
`;

const Cell = (props) => {
    
    const handleClick = () => {
        props.onRedrawField(props.value);
    };

    return (
        <Field
            isEmpty={props.value == null}
            onClick={handleClick}
        >
            {props.value}
        </Field> 
        
    )
    
}

export default Cell;