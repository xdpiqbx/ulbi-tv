import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../../Pages/About';
import ErrorPage from '../../Pages/ErrorPage';
import Posts from '../../Pages/Posts';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/error">
        <ErrorPage />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};
export default AppRouter;
