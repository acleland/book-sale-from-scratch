import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooksById } from '../../services/fetch';

export default function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();

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
      <button>Delete</button>
    </div>
  );
}
