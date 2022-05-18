import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import BookList from './views/BookList/BookList';
import Auth from './views/Auth/Auth';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <UserProvider>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/">
            <PrivateRoute>
              <Header />
              <BookList />
            </PrivateRoute>
          </Route>
        </Switch>
      </UserProvider>
    </>
  );
}
