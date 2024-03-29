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
  CHANGE_USER_REQUEST,
  CHANGE_USER_SUCCESS,
  CHANGE_USER_ERROR,
} from './constant';
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

const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
});

const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
});

const deleteUserError = () => ({
  type: DELETE_USER_ERROR,
});

const postUserRequest = () => ({
  type: POST_USER_REQUEST,
});

const postUserSuccess = () => ({
  type: POST_USER_SUCCESS,
});

const postUserError = () => ({
  type: POST_USER_ERROR,
});

const changeUserSuccess = () => ({
  type: CHANGE_USER_SUCCESS,
});
const changeUserError = () => ({
  type: CHANGE_USER_ERROR,
});
const changeUserRequest = () => ({
  type: CHANGE_USER_REQUEST,
});

export const getUsers = () => (dispatch) => {
  dispatch(usersRequest());
  return api.user
    .getUsers()
    .then((res) => {
      dispatch(usersSuccess(res.data));
    })
    .catch(() => dispatch(usersError()));
};

export const changeUser = (id, obj) => (dispatch) => {
  dispatch(changeUserRequest());
  return api.user
    .changeUser(id, obj)
    .then(() => {
      dispatch(changeUserSuccess());
      dispatch(getUsers());
    })
    .catch(() => dispatch(changeUserError()));
};

export const deleteUser = (id) => (dispatch) => {
  dispatch(deleteUserRequest());
  return api.user
    .deleteUser(id)
    .then(() => {
      dispatch(deleteUserSuccess());
      dispatch(getUsers());
    })
    .catch(() => dispatch(deleteUserError()));
};

export const postUser = (obj) => async (dispatch) => {
  await dispatch(postUserRequest());
  return await api.user
    .postUser(obj)
    .then(() => {
      dispatch(postUserSuccess());
    })
    .catch(() => dispatch(postUserError()));
};
