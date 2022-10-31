import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useAuth } from '../../context/auth.context';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../api-calls/firebaseAuthApis';


export const SignIn = () =>{
  const {
    state,
    dispatch
  } = useAuth();
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email : "",
    password: ""
  });

  const loginHandler = () => {
    if(
      loginDetails.email !== "" &&
      loginDetails.password !== ""
    )  {
      loginUser(loginDetails.email, loginDetails.password, dispatch, navigate);
    }
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginDetails.email}
              onChange={(e) => setLoginDetails(details => ({...details, email: e.target.value}))}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginDetails.password}
              onChange={(e) => setLoginDetails(details => ({...details, password: e.target.value}))}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => loginHandler()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/singup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}