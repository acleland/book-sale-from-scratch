import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/fetch';
import { Link } from 'react-router-dom';
import { useBooks } from '../../hooks/books';

export default function BookList() {
  // const [books, setBooks] = useState([]);

  // //loading state

  // useEffect(() => {
  //   const getBooks = async () => {
  //     const data = await fetchBooks();
  //     setBooks(data);
  //     console.log(data);
  //   };
  //   getBooks();
  // }, []);

  const { books } = useBooks();

  return (
    <div>
      <h2>Superlative Books for Sale</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h3>{book.title}</h3>{' '}
            </Link>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
