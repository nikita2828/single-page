import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/reducer';
import recipeReducer from './recipes/reducer';
import categoryReducer from './categories/reducer';

const rootReduser = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
  category: categoryReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReduser, middleware);

export default store;
