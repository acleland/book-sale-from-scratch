import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/fetch';

export default function BookList() {
  const [books, setBooks] = useState([]);
  //loading state

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
      console.log(data);
    };
    getBooks();
  }, []);

  return (
    <div>
      <h2>Superlative Books for Sale</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
