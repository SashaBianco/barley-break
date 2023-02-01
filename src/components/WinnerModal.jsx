import { Modal, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    bgcolor: 'background.paper',
    outline: 'none',
    p: 4,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  };

const AgainGameButton = styled.button`
  background: none;
  border: 1px solid #469597;
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
        background: rgba(91, 161, 153, 0.2);
        transition: all 0.7s ease;
        outline: 1px solid #469597;
    }
`;
const WinnerModal = (props) => {

    return (
        <Modal
          isActive = {props.modal == true}
          open={props.modal}
        >
          <Box sx={style}>
            <Typography variant="h4" component="h1" sx={ {p: 3}}>
                Congratulations! 
            </Typography>
            <Typography sx={{ px: 3, fontSize: 18 }}>
                Your score:
            </Typography>
            <Typography sx={{ px: 3, fontSize: 36 }}>
              {props.value}
            </Typography>
            <Link to={'/home'}>
              <AgainGameButton>Play again</AgainGameButton>
            </Link>
          </Box>
        </Modal>
    )
};

export default WinnerModal;