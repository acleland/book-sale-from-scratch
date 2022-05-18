import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import BookList from './views/BookList/BookList';
import Auth from './views/Auth/Auth';
import Header from './components/Header';
import BookDetails from './views/BookDetails/BookDetails';

export default function App() {
  return (
    <>
      <UserProvider>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/books/:id">
            <BookDetails />
          </PrivateRoute>

          <PrivateRoute path="/books">
            <Header />
            <BookList />
          </PrivateRoute>

          <PrivateRoute path="/">
            <Redirect to="/books" />
          </PrivateRoute>
        </Switch>
      </UserProvider>
    </>
  );
}
