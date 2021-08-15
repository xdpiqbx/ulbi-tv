import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';

const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }, index) => (
        <Route
          key={index}
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
          key={index}
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
