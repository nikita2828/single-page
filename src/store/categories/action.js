import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  POST_CATEGORY_REQUEST,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_ERROR,
  PUT_CATEGORY_REQUEST,
  PUT_CATEGORY_SUCCESS,
  PUT_CATEGORY_ERROR,
} from './constant';
import api from '../../utils/api';

const categoriesRequest = () => ({
  type: CATEGORIES_REQUEST,
});
const categoriesSuccess = (payload) => ({
  type: CATEGORIES_SUCCESS,
  payload,
});
const categoriesError = () => ({
  type: CATEGORIES_ERROR,
});

const deleteCategoryRequest = () => ({
  type: DELETE_CATEGORY_REQUEST,
});
const deleteCategorySuccess = () => ({
  type: DELETE_CATEGORY_SUCCESS,
});
const deleteCategoryError = () => ({
  type: DELETE_CATEGORY_ERROR,
});

const postCategoryRequest = () => ({
  type: POST_CATEGORY_REQUEST,
});
const postCategorySuccess = () => ({
  type: POST_CATEGORY_SUCCESS,
});
const postCategoryError = () => ({
  type: POST_CATEGORY_ERROR,
});

const putCategoryRequest = () => ({
  type: PUT_CATEGORY_REQUEST,
});
const putCategorySuccess = () => ({
  type: PUT_CATEGORY_SUCCESS,
});
const putCategoryError = () => ({
  type: PUT_CATEGORY_ERROR,
});

export const getCaterories = () => async (dispatch) => {
  await dispatch(categoriesRequest());
  return await api.category
    .getCaterories()
    .then((res) => dispatch(categoriesSuccess(res.data)))
    .catch(() => dispatch(categoriesError()));
};

export const deleteCategory = (id) => async (dispatch) => {
  await dispatch(deleteCategoryRequest());
  return await api.category
    .deleteCategory(id)
    .then(() => {
      dispatch(deleteCategorySuccess());
      dispatch(getCaterories());
    })
    .catch(() => dispatch(deleteCategoryError()));
};

export const postCategory = (obj) => async (dispatch) => {
  await dispatch(postCategoryRequest());
  return await api.category
    .postCategory(obj)
    .then(() => dispatch(postCategorySuccess()))
    .catch(() => dispatch(postCategoryError()));
};

export const putCategory = (id, obj) => async (dispatch) => {
  await dispatch(putCategoryRequest());
  return await api.category
    .putCategory(id, obj)
    .then(() => dispatch(putCategorySuccess()))
    .catch(() => dispatch(putCategoryError()));
};
