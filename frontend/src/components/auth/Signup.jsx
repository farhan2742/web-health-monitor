import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Footer from '../Layout/Footer';
import Paper from '@mui/material/Paper';
import Navbar from '../Layout/Navbar'                         // Navbar Component
import { registerUser, setRegisterUser } from '../../actions/authActions';

function Signup(props) {
    let navigate = useNavigate();
    const state = useSelector((state) => state)
  const handleSubmit = (event) => {
    let data = {
        'name': '',
        'email': '',
        'password': '',
        'password2': ''
    }
    event.preventDefault();
    data = new FormData(event.currentTarget);
    const userData = {
        name: data.get('firstName') + ' ' + data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
        password2: data.get('password2'),
    };
    props.registerUser(userData);
    if(state.auth.isRegistered === true) {
      return navigate("/login");
    }
  };

  useEffect( () => {                                                                                // Before a component is loaded
    if(state.auth.isAuthenticated === true) {
        return navigate("/Dashboard");
    }         
    //console.log(Object.keys(state.errors).length)
    let navigated = 0;     
    if(state.auth.isRegistered === true) {
      props.setRegisterUser(false)
      return navigate("/login");
    }                                                           // Download URLs
  }, [state.auth.isAuthenticated, state.auth.isRegistered]);

  return (
      <>
      <Grid container component="main">
      <Navbar position="relative" />
        <CssBaseline />
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
            sx={{
              my: 8,
              mx: 4,
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  data-testid="registerFirstNameFormField"
                  autoFocus
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
                  data-testid="registerLastNameFormField"
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
                  data-testid="registerEmailFormField"
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
                  data-testid="registerPasswordFormField"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                  data-testid="registerPassword2FormField"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              data-testid="registerSubmitFormButton"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
          <Footer sx={{ mt: 5 }} />
        </Grid>
      </Grid>

      </>
  );
}

Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    setRegisterUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser, setRegisterUser})(Signup);