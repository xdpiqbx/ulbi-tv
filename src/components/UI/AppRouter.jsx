import { useContext } from 'react';
import { AuthContext } from '../../context';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';
import Loader from './Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }, index) => (
        <Route
          key={path}
          component={component}
          path={path}
          exact={exact}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }, index) => (
        <Route
          key={path}
          component={component}
          path={path}
          exact={exact}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};
export default AppRouter;
