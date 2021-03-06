import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from '../components/Users';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import Dashboard from '../components/Dashboard';
import App from '../App';
import routes from '../constants/routes';
import Black from '../components/Categories/components/Black';
import Green from '../components/Categories/components/Green';
import Red from '../components/Categories/components/Red';
import White from '../components/Categories/components/Black/component/White';
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
          exact
          path={routes.categories}
          component={() => (
            <App>
              <Categories />
            </App>
          )}
        />
        <Route
          path={routes.red}
          component={() => (
            <App>
              <Categories>
                <Red />
              </Categories>
            </App>
          )}
        />
        <Route
          path={routes.green}
          component={() => (
            <App>
              <Categories>
                <Red>
                  <Green />
                </Red>
              </Categories>
            </App>
          )}
        />
        <Route
          exact
          path={routes.black}
          component={() => (
            <App>
              <Categories>
                <Red>
                  <Green>
                    <Black />
                  </Green>
                </Red>
              </Categories>
            </App>
          )}
        />
        <Route
          path={routes.white}
          component={() => (
            <App>
              <Categories>
                <Red>
                  <Green>
                    <Black>
                      <White />
                    </Black>
                  </Green>
                </Red>
              </Categories>
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
