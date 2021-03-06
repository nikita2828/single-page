import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from '../components/Users';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import Dashboard from '../components/Dashboard';
import App from '../App';
import routes from '../constants/routes';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routes.dashboard}
          component={() => (
            <App>
              <Dashboard />
            </App>
          )}
        />
        <Route
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
          path={routes.users}
          component={() => (
            <App>
              <Users />
            </App>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
