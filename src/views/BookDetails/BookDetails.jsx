import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBooks, useBook } from '../../hooks/books';
import { fetchBooksById } from '../../services/fetch';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function BookDetails() {
  const { id } = useParams();
  const { book } = useBook(id);
  const { remove } = useBooks();
  const history = useHistory();
  const { user } = useUser();

  if (!book) return null;

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await remove(id);
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <h1>Book Details</h1>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.description}</p>
      <p>{book.price}</p>
      <p>{`Owned by ${book.owner_email}`}</p>

      {user.id === book.user_id ? (
        <>
          <Link to={`/books/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <Link to={`/books/${id}/copy`}>
          <button>Copy</button>
        </Link>
      )}

      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </div>
  );
}
