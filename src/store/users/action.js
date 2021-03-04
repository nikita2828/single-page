import { USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from './constant';
import api from '../../utils/api';

const usersRequest = () => ({
  type: USERS_REQUEST,
});

const usersSuccess = (payload) => ({
  type: USERS_SUCCESS,
  payload,
});

const usersError = () => ({
  type: USERS_ERROR,
});

export const getUsers = () => (dispatch) => {
  dispatch(usersRequest());
  return api.user
    .getUsers()
    .then((res) => {
      dispatch(usersSuccess(res.data));
    })
    .catch((err) => dispatch(usersError(err)));
};
