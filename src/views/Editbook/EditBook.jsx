import React from 'react';
import { useBooks, useBook } from '../../hooks/books';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import BookForm from '../../components/BookForm';

export default function EditBook() {
  const { id } = useParams();
  const { book, update } = useBook(id);
  console.log('book ', book);
  const history = useHistory();

  if (!book) {
    return null;
  }
  const handleSubmit = async (book) => {
    try {
      await update({ id, ...book });
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <BookForm handleSubmit={handleSubmit} title={'Edit:'} initialState={book} />
  );
}
