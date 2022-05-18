import { useContext, useEffect } from 'react';
import { BooksContext } from '../context/BooksContext';

import { fetchBooks, createBook } from '../services/fetch';

export function useBooks() {
  const context = useContext(BooksContext);

  if (context === undefined) {
    throw new Error('useBooks must be used withing a BooksProvider');
  }

  const { books, dispatch } = context;
  console.log('books in books.js', books);

  useEffect(() => {
    if (books) return;

    const getBooks = async () => {
      try {
        const payload = await fetchBooks();
        console.log('payload', payload);
        dispatch({ type: 'reset', payload });
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, []);
}
