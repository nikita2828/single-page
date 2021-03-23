import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from '../components/Users';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import Dashboard from '../components/Dashboard';
import App from '../App';
import routes from '../constants/routes';
import CreateNewUser from '../components/CreateNewUser';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.dashboard} component={Dashboard} />
        <Route exact path='/dashboard/user/:id/:age' component={Dashboard} />
        <Route
          exact
          path={routes.categories}
          component={() => (
            <App>
              <Categories />
            </App>
          )}
        />
        <Route
          path={routes.recipes}
          component={() => (
            <App>
              <Recipes />
            </App>
          )}
        />
        <Route
          exact
          path={routes.users}
          component={({ history }) => (
            <App>
              <Users history={history} />
            </App>
          )}
        />
        <Route
          path={routes.createNewUser}
          component={({ history }) => (
            <App>
              <CreateNewUser history={history} />
            </App>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
