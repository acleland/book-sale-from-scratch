import { Link } from 'react-router-dom';
import { useBooks } from '../../hooks/books';
import styles from '../../styles.css';

export default function BookList() {
  const { books } = useBooks();

  return (
    <div className={styles.bookList}>
      <h2>Superlative Books for Sale</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h3>{book.title}</h3>{' '}
            </Link>
            <p>{book.author}</p>
            {book.owner_email && <p>{`Book owner: ${book.owner_email}`}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
