import styled from "styled-components";

const Form = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const SelectionDifficulty = (props) => {

    const handlerChangeInput = (e) => {
        const value = e.target.value;
        props.setLevel(value);
    }

    return (
        <Form>
            <select  onChange={handlerChangeInput}>
                <option value='easy'>Легкий</option>
                <option value='medium'>Средний</option>
                <option value='hard'>Сложный</option>
            </select>
        </Form>
    )
}
    

export default SelectionDifficulty;