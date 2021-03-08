import { RECIPES_REQUEST, RECIPES_SUCCESS, RECIPES_ERROR } from './constant';
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

export const getRecipes = () => (dispatch) => {
  dispatch(recipesRequest());
  return api.user
    .getRecipes()
    .then((res) => {
      dispatch(recipesSuccess(res.data));
    })
    .catch((err) => dispatch(recipesError(err)));
};
