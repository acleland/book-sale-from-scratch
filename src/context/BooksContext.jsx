import { createContext, useReducer } from 'react';
import { createBook } from '../services/fetch';

export const BooksContext = createContext();

// const dummy_data = [
//   { title: 'Cat in the Hat', author: 'Dr. Seus' },
//   { title: 'Fox in Socks', author: 'Dr. Seus' },
// ];

function reducer(books, action) {
  switch (action.type) {
    case 'create':
      createBook(action.payload);
      return [action.payload, ...books];

    case 'reset':
      return action.payload;

    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}

export const BooksProvider = ({ children }) => {
  const [books, dispatch] = useReducer(reducer, []);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
