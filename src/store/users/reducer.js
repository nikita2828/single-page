import { USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from './constant';

const reducerState = {
  users: [],
  loader: false,
};

const userReducer = (state = reducerState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USERS_REQUEST:
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
