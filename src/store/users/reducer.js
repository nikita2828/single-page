import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_ERROR,
} from './constant';

const reducerState = {
  users: [],
  loader: false,
};

const userReducer = (state = reducerState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USERS_REQUEST:
    case DELETE_USER_REQUEST:
    case POST_USER_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        loader: false,
      };
    case USERS_ERROR:
    case DELETE_USER_SUCCESS:
    case DELETE_USER_ERROR:
    case POST_USER_SUCCESS:
    case POST_USER_ERROR:
      return {
        ...state,
        loader: false,
      };
    default:
      return {
        ...state,
        loader: false,
      };
  }
};
export default userReducer;
