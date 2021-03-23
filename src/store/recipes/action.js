import {
  RECIPES_REQUEST,
  RECIPES_SUCCESS,
  RECIPES_ERROR,
  DELETE_RECIPE_REQUEST,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
  POST_RECIPE_REQUEST,
  POST_RECIPE_SUCCESS,
  POST_RECIPE_ERROR,
} from './constant';
import api from '../../utils/api';

const recipesRequest = () => ({
  type: RECIPES_REQUEST,
});

const recipesSuccess = (payload) => ({
  type: RECIPES_SUCCESS,
  payload,
});

const recipesError = () => ({
  type: RECIPES_ERROR,
});

const deleteRecipeRequest = () => ({
  type: DELETE_RECIPE_REQUEST,
});

const deleteRecipeSuccess = () => ({
  type: DELETE_RECIPE_SUCCESS,
});

const deleteRecipeError = () => ({
  type: DELETE_RECIPE_ERROR,
});

const postRecipeRequest = () => ({
  type: POST_RECIPE_REQUEST,
});
const postRecipeSuccess = () => ({
  type: POST_RECIPE_SUCCESS,
});
const postRecipeError = () => ({
  type: POST_RECIPE_ERROR,
});

export const getRecipes = () => (dispatch) => {
  dispatch(recipesRequest());
  return api.recipe
    .getRecipes()
    .then((res) => {
      dispatch(recipesSuccess(res.data));
    })
    .catch((err) => dispatch(recipesError(err)));
};

export const deleteRecipe = (id) => (dispatch) => {
  dispatch(deleteRecipeRequest());
  return api.recipe
    .deleteRecipe(id)
    .then(() => dispatch(deleteRecipeSuccess()))
    .catch(() => dispatch(deleteRecipeError()));
};

export const postRecipe = (obj) => async (dispatch) => {
  await dispatch(postRecipeRequest());
  return await api.recipe
    .postRecipe(obj)
    .then(() => dispatch(postRecipeSuccess()))
    .catch(() => dispatch(postRecipeError()));
};
