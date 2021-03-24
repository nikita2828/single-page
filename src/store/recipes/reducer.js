import { PUT_CATEGORY_REQUEST } from '../categories/constant';
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
  PUT_RECIPE_REQUEST,
  PUT_RECIPE_SUCCESS,
  PUT_RECIPE_ERROR,
} from './constant';

const reducerState = {
  recipes: [],
  loader: false,
};

const recipeReducer = (state = reducerState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPES_REQUEST:
    case DELETE_RECIPE_REQUEST:
    case POST_RECIPE_REQUEST:
    case PUT_CATEGORY_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case RECIPES_SUCCESS:
      return {
        ...state,
        recipes: payload,
        loader: false,
      };
    case RECIPES_ERROR:
    case DELETE_RECIPE_SUCCESS:
    case DELETE_RECIPE_ERROR:
    case POST_RECIPE_SUCCESS:
    case POST_RECIPE_ERROR:
    case PUT_RECIPE_ERROR:
    case PUT_RECIPE_SUCCESS:
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

export default recipeReducer;
