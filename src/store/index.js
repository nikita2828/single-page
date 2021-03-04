import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/reducer';

const rootReduser = combineReducers({
  user: userReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReduser, middleware);

export default store;
