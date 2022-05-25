import { Route } from 'react-router-dom';

import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import BookList from './views/BookList/BookList';
import Auth from './views/Auth/Auth';
import Header from './components/Header';
import BookDetails from './views/BookDetails/BookDetails';
import NewBook from './views/NewBook/NewBook';
import { Toaster } from 'react-hot-toast';
import EditBook from './views/Editbook/EditBook';

import CssBaseline from '@mui/material/CssBaseline';
import { BooksProvider } from './context/BooksContext';
import CopyBook from './views/CopyBook/CopyBook';

export default function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <CssBaseline />
      <UserProvider>
        <BooksProvider>
          <Header />
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <PrivateRoute path="/books/new">
              <NewBook />
            </PrivateRoute>
            <PrivateRoute path="/books/:id/edit">
              <EditBook />
            </PrivateRoute>
            <PrivateRoute path="/books/:id/copy">
              <CopyBook />
            </PrivateRoute>
            <PrivateRoute path="/books/:id">
              <BookDetails />
            </PrivateRoute>
            <PrivateRoute path="/books">
              <BookList />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Redirect to="/books" />
            </PrivateRoute>
          </Switch>
        </BooksProvider>
      </UserProvider>
      <CssBaseline />
    </>
  );
}
