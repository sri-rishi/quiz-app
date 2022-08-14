import * as React from 'react';
import "./rulesModal.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

type ChildProps = {
  open: any,
  setOpen: React.Dispatch<React.SetStateAction<any>>
}

export const RulesModal = ({setOpen, open}: ChildProps) => {
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container font-comfortaa"
        sx={{
          "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
            backgroundColor: "#cccccca2"
          }
        }}
      >
        <Box 
          className="modal"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Instructions
          </Typography>

          <ul className="rules-list">
            <li>
              This quiz consists of 10 multiple-choice questions.
            </li>
            <li>
              Each question will carry 5 points for correct answer.
            </li>
            <li>
              There will be no negative marking.
            </li>
            <li>
              Each MCQ has only one correct answer.
            </li>
          </ul>

          <Link to="/questions" className="start-btn-div">
            <Button variant="contained">Start Quiz</Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
