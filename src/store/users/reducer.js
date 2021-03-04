import { USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from './constant';

const reducerState = {
  users: [],
};

const userReducer = (state = reducerState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USERS_REQUEST:
      return {
        ...state,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        users: payload,
      };
    case USERS_ERROR:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
