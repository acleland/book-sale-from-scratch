import React from 'react';
import { useBook } from '../../hooks/books';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import BookForm from '../../components/BookForm';

export default function CopyBook() {
  const { id } = useParams();
  const { book, copy } = useBook(id);
  console.log('book ', book);
  const history = useHistory();

  if (!book) {
    return null;
  }
  const handleSubmit = async (book) => {
    try {
      await copy({ ...book });
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <BookForm handleSubmit={handleSubmit} title={'Copy:'} initialState={book} />
  );
}
