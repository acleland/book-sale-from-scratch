import { createContext, useReducer } from 'react';
import { createBook } from '../services/fetch';

export const BooksContext = createContext();

function reducer(books, action) {
  switch (action.type) {
    case 'create':
      return [action.payload, ...books];

    case 'get':
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
