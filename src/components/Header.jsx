import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useUser();
  return (
    <header>
      <Link to="/">
        <h2>Superlative Books</h2>
      </Link>
      <NavLink to="/books/new">Add a book</NavLink>

      <span>
        <p>{`signed in as ${user.email}`}</p>
        <button onClick={() => logout()}>logout</button>
      </span>
    </header>
  );
}
