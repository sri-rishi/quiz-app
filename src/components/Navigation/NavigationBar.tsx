import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/quiz.context';

export const NavigationBar = () => {
  const {setIndex} = useQuiz();
  return (
      <AppBar 
        position="fixed"
        sx={{
            backgroundColor: "#fff",
            padding: "5px"
        }}
      >
        <Toolbar>
          
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontFamily:"Pacifico, cursive", 
              }}
            >
              <Link 
                to="/"
                onClick={() => setIndex(0)}
              >
                Quizee
              </Link>
            </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{
                    color: "#06283D",
                }}
              >
                <AccountCircle sx={{fontSize:"2rem"}}/>
              </IconButton>
        </Toolbar>
      </AppBar>
  );
}
