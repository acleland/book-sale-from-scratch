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

export default function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <CssBaseline />
      <UserProvider>
        <BooksProvider>
          {/* <Router> */}
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>

            <PrivateRoute path="/books/new">
              <NewBook />
            </PrivateRoute>

            <PrivateRoute path="/books/:id/edit">
              <Header />
              <EditBook />
            </PrivateRoute>

            <PrivateRoute path="/books/:id">
              <Header />
              <BookDetails />
            </PrivateRoute>

            <PrivateRoute path="/books">
              <Header />
              <BookList />
            </PrivateRoute>

            <PrivateRoute path="/">
              <Header />
              <Redirect to="/books" />
            </PrivateRoute>
          </Switch>
          {/* </Router> */}
        </BooksProvider>
      </UserProvider>
      <CssBaseline />
    </>
  );
}
