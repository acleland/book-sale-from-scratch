import React from 'react';
import { Link } from 'react-router-dom';

export default function NewBook() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2>Add a book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Title" />
        <input type="text" id="author" placeholder="Author" />
        <input type="text" id="genre" placeholder="Genre" />
        <input type="text" id="price" placeholder="Price" />
        <input type="text" id="image" placeholder="Image" />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <button>Submit</button>
      </form>
      <Link to="/books">Back to books</Link>
    </>
  );
}
