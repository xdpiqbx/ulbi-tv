import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '../../router';

const AppRouter = () => {
  return (
    <Switch>
      {routes.map(({ path, component, exact }, index) => (
        <Route
          key={index}
          component={component}
          path={path}
          exact={exact}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  );
};
export default AppRouter;
