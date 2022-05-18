import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { user, logout } = useUser();
  return (
    <header>
      <h2>Superlative Books</h2>
      <span>
        <p>{`signed in as ${user.email}`}</p>
        <button onClick={() => logout()}>logout</button>
      </span>
    </header>
  );
}
