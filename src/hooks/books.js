import { useContext, useEffect } from 'react';
import { BooksContext } from '../context/BooksContext';
import { fetchBooks } from '../services/fetch';

export function useBooks() {
  const context = useContext(BooksContext);

  if (context === undefined) {
    throw new Error('useBooks must be used withing a BooksProvider');
  }

  const { books, dispatch } = context;

  useEffect(() => {
    const getBooks = async () => {
      try {
        const payload = await fetchBooks();

        dispatch({ type: 'get', payload });
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, []);
  return { books };
}
