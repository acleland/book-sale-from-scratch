import React from 'react';
import { useState } from 'react';
import styles from './Auth.css';
import { toast } from 'react-hot-toast';

import ReactDOM from 'react-dom';

import { useUser } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

import {
  Button,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const theme = createTheme();

export default function Auth() {
  const { login, signup } = useUser();
  const history = useHistory();
  const location = useLocation();

  const [isSignUp, setIsSignUp] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // to do: add toast
    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }

      const url = location.state.origin ? location.state.origin.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
    toast.success(`Welcome ${email}!`);
  };

  return (
    <>
      {error && <p>{`${error}`}</p>}
      <ThemeProvider theme={theme}>
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
              <span
                className={`${styles['auth-toggle']} ${
                  isSignUp ? '' : styles.selected
                }`}
                onClick={toggleAuth}
              >
                Sign In
              </span>
              <span
                className={`${styles['auth-toggle']} ${
                  isSignUp ? styles.selected : ''
                }`}
                onClick={toggleAuth}
              >
                Sign Up
              </span>
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{ margin: '20px' }}
              >
                {isSignUp ? 'Sign up' : 'Sign in'}
              </Button>
              <Grid container>
                <Grid item xs></Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <div>
        <div className={styles['auth-page']}>
          {/* <div className={styles['auth-menu']}>
            <span
              className={`${styles['auth-toggle']} ${
                isSignUp ? '' : styles.selected
              }`}
              onClick={toggleAuth}
            >
              Sign In
            </span>
            <span
              className={`${styles['auth-toggle']} ${
                isSignUp ? styles.selected : ''
              }`}
              onClick={toggleAuth}
            >
              Sign Up
            </span>
          </div> */}

          {/* <form className={styles['auth']} onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label> */}
          {/* <button>{isSignUp ? 'Sign up' : 'Sign in'}</button> */}
          {/* <Button
              onClick={handleSubmit}
              variant="contained"
              style={{ margin: '20px' }}
            >
              {isSignUp ? 'Sign up' : 'Sign in'}
            </Button> */}
          {/* </form> */}
        </div>
      </div>
    </>
  );
}
