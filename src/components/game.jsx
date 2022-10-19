import React from "react";
import styled from 'styled-components';


const Container = styled.div`
    width: 600px;
    height: 600px;
    border: 2px solid #000;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
`

const Field = styled.div`
    border 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    background: #f2f2f2;
`

const Game = () => {
    return (
        <Container>
            <Field>1</Field>
            <Field>2</Field>
            <Field>3</Field>
            <Field>4</Field>
            <Field>5</Field>
            <Field>6</Field>
            <Field>7</Field>
            <Field>8</Field>
            <Field>9</Field>
            <Field>10</Field>
            <Field>11</Field>
            <Field>12</Field>
            <Field>13</Field>
            <Field>14</Field>
            <Field>15</Field>
        </Container>
            
    )
}

export default Game;