import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from '../components/Users';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import Dashboard from '../components/Dashboard';
import App from '../App';
import routes from '../constants/routes';
import CreateNewUser from '../components/CreateNewUser';
import CreateNewRecipe from '../components/CreateNewRecipe';

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
          exact
          path={routes.recipes}
          component={({ history }) => (
            <App>
              <Recipes history={history} />
            </App>
          )}
        />
        <Route
          path={routes.createNewRecipe}
          component={({ history }) => (
            <App>
              <CreateNewRecipe history={history} />
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
