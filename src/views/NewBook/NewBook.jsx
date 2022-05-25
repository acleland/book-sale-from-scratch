import React from 'react';
import { useBooks } from '../../hooks/books';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import BookForm from '../../components/BookForm';

export default function NewBook() {
  const { add } = useBooks();
  const history = useHistory();

  const handleSubmit = async (book) => {
    try {
      await add(book);
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <BookForm handleSubmit={handleSubmit} title={'Add a new book below:'} />
  );
}
