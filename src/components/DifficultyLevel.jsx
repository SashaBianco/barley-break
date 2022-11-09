import styled from "styled-components";

const Form = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const DifficultyLevel = (props) => {

    const handlerChangeInput = (e) => {
        const value = e.target.value;
        props.getCountShuffle(value);
    }

    return (
        <Form>
            <select  onChange={handlerChangeInput}>
                <option value='easy'>Легко</option>
                <option value='medium'>Средне</option>
                <option value='hard'>Сложно</option>
            </select>
        </Form>
    )
}
    

export default DifficultyLevel;