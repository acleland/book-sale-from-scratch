import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { user, logout } = useUser();
  return (
    <header>
      <h2>Superlative Books</h2>
      <NavLink to="/books/new">Add a book</NavLink>
      <span>
        <p>{`signed in as ${user.email}`}</p>
        <button onClick={() => logout()}>logout</button>
      </span>
    </header>
  );
}
