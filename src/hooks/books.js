import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { BooksContext } from '../context/BooksContext';
import { createBook, fetchBooks } from '../services/fetch';

export function useBooks() {
  const context = useContext(BooksContext);

  if (context === undefined) {
    throw new Error('useBooks must be used withing a BooksProvider');
  }

  const { books, dispatch } = context;

  useEffect(() => {
    const getBooks = async () => {
      try {
        const bookList = await fetchBooks();

        dispatch({ type: 'get', payload: bookList });
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, []);

  const add = async (book) => {
    try {
      const newBook = await createBook(book);
      dispatch({ type: 'create', payload: newBook });
      toast.success(`Your book "${newBook.title}" has been added`);
      return newBook;
    } catch (err) {
      console.log(err);
    }
  };

  return { books, add };
}
