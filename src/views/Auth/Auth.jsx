import React from 'react';
import { useState } from 'react';
import styles from './Auth.css';
import { toast } from 'react-hot-toast';

import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import { useUser } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

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
    <div className={styles['auth-page']}>
      <h1>Superlative Books</h1>
      <div className={styles['auth-menu']}>
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
      </div>
      {error && <p>{`${error}`}</p>}
      <form className={styles['auth']} onSubmit={handleSubmit}>
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
        </label>
        {/* <button>{isSignUp ? 'Sign up' : 'Sign in'}</button> */}
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{ margin: '20px' }}
        >
          {isSignUp ? 'Sign up' : 'Sign in'}
        </Button>
      </form>
    </div>
  );
}
