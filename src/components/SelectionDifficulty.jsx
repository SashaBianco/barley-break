import styled from "styled-components";
import { FormControl, Select, MenuItem, InputLabel  } from "@mui/material";

const Container = styled.div`
    width: 400px;
    margin-top: 256px;
    display: flex;
    margin-bottom: 20px;
`;

const SelectionDifficulty = (props) => {

    const handlerChangeInput = (e) => {
        const value = e.target.value;
        props.setLevel(value);
    }

    return (
        <Container>
            <FormControl fullWidth>
            <InputLabel id="select-label">Difficulty</InputLabel>
                 <Select  
                    onChange={handlerChangeInput}
                    id='select-label'
                    label='difficulty'
                    defaultValue='easy'
                    
                 >
                     <MenuItem  value='easy'>Easy</MenuItem>
                     <MenuItem  value='medium'>Medium</MenuItem>
                     <MenuItem  value='hard'>Hard</MenuItem>
                 </Select>
             </FormControl> 
        </Container>
 
    )
}
    

export default SelectionDifficulty;