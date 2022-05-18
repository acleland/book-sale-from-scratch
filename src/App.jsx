import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import BookList from './views/BookList/BookList';
import Auth from './views/Auth/Auth';
import Header from './components/Header';
import BookDetails from './views/BookDetails/BookDetails';
import NewBook from './views/NewBook/NewBook';

export default function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>

            <PrivateRoute path="/books/new">
              <NewBook />
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
        </Router>
      </UserProvider>
    </>
  );
}
