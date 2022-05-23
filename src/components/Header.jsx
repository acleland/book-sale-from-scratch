import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import styles from '../styles.css';

export default function Header() {
  const { user, logout } = useUser();
  return (
    <header className={`${styles.headerFont} ${styles.header}`}>
      <Link to="/">
        <h2>Superlative Books</h2>
      </Link>

      {user.email && (
        <>
          <NavLink to="/books/new">Add a book</NavLink>
          <span>
            <p>{`signed in as ${user.email}`}</p>
            <button
              style={{ padding: '0px', height: '2em', marginLeft: '5px' }}
              onClick={() => logout()}
            >
              logout
            </button>
          </span>
        </>
      )}
    </header>
  );
}
