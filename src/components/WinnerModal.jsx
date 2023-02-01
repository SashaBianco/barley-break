import { Modal, Box, Typography } from "@mui/material";

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

const WinnerModal = (props) => {

    const closeModal = () => {
        props.onStateModale(false);
        props.onChangeScore(0);
      }
    
    return (
        <Modal
          isActive = {props.modal == true}
          open={props.modal}
          onClose={closeModal}
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
          </Box>
        </Modal>
    )
};

export default WinnerModal;