import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BooksContext } from '../context/BooksContext';
import {
  createBook,
  fetchBooks,
  deleteBook,
  updateBook,
  fetchBooksById,
} from '../services/fetch';

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

  const remove = async (id) => {
    try {
      const removed = await deleteBook(id);
      dispatch({ type: 'delete', payload: removed });
      toast.success(`Your book "${removed.title}" has been deleted`);
      return removed;
    } catch (err) {
      console.log(err);
    }
  };

  // const update = async (book) => {
  //   try {
  //     console.log('book to update: ', book);
  //     const updated = await updateBook(book);
  //     console.log('updated', updated);
  //     dispatch({ type: 'update', payload: updated });
  //     toast.success(`You successfully updated ${book.title}`);
  //     return updated;
  //   } catch (err) {
  //     console.log('update error', err);
  //   }
  // };
  return { books, add, remove };
}

export function useBook(id) {
  const context = useContext(BooksContext);

  if (context === undefined) {
    throw new Error('useBooks must be used withing a BooksProvider');
  }

  const { dispatch } = context;

  const [book, setBook] = useState();
  useEffect(() => {
    const getBook = async () => {
      const data = await fetchBooksById(id);

      setBook(data);
    };
    getBook();
  }, [id]);

  const update = async (book) => {
    try {
      console.log('book to update: ', book);
      const updated = await updateBook(book);
      console.log('updated', updated);
      dispatch({ type: 'update', payload: updated });
      toast.success(`You successfully updated ${book.title}`);
      return updated;
    } catch (err) {
      console.log('update error', err);
    }
  };

  const copy = async (book) => {
    try {
      const copyBook = await createBook({
        title: book.title,
        author: book.author,
        genre: book.genre,
        price: book.price,
        description: book.description,
      });
      dispatch({ type: 'create', payload: newBook });
      toast.success(`Your book "${newBook.title}" has been copied`);
      return copyBook;
    } catch (err) {
      console.log(err);
    }
  };

  return { book, update, copy };
}
