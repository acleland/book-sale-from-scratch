import { createContext, useReducer } from 'react';

export const BooksContext = createContext();

function reducer(books, action) {
  switch (action.type) {
    case 'create':
      return [action.payload, ...books];

    case 'get':
      return action.payload;

    case 'delete':
      return books.filter((book) => book.id !== action.payload.id);

    case 'update':
      return books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );

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
