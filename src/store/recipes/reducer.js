import { RECIPES_REQUEST, RECIPES_SUCCESS, RECIPES_ERROR } from './constant';

const reducerState = {
  recipes: [],
  loader: false,
};

const recipeReducer = (state = reducerState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPES_REQUEST:
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
