import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const NavigationBar = () => {

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
              color: "#0096FF"
            }}
          >
            Quizee
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
