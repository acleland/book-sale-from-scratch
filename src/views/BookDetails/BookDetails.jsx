import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from '../../hooks/books';
import { fetchBooksById } from '../../services/fetch';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

export default function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const { remove } = useBooks();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await remove(id);
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const getBook = async () => {
      const data = await fetchBooksById(id);

      setBook(data);
    };
    getBook();
  }, [id]);

  return (
    <div>
      <h1>Book Details</h1>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.description}</p>
      <p>{book.price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
