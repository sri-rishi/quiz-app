import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../../context/auth.context';
import {useState} from "react";
import { signupUser } from '../../api-calls/firebaseAuthApis';
import { useNavigate, Link } from 'react-router-dom';

export const SignUp = () => {
  const {dispatch} = useAuth();
  const navigate = useNavigate();
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const signupHandler = () => {
    const fullName = signupDetails.firstName + " " + signupDetails.lastName
    signupUser(fullName, signupDetails.email, signupDetails.password, dispatch, navigate);
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
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={signupDetails.firstName}
                  onChange={(e) => setSignupDetails(details => ({...details, firstName: e.target.value}))}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={signupDetails.lastName}
                  onChange={(e) => setSignupDetails(details => ({...details, lastName: e.target.value}))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={signupDetails.email}
                  onChange={(e) => setSignupDetails(details => ({...details, email: e.target.value}))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={signupDetails.password}
                  onChange={(e) => setSignupDetails(details => ({...details, password: e.target.value}))}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => signupHandler()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}