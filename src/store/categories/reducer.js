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

const reducerState = {
  categories: [],
  loader: false,
};

const categoryReducer = (state = reducerState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_REQUEST:
    case DELETE_CATEGORY_REQUEST:
    case POST_CATEGORY_REQUEST:
    case PUT_CATEGORY_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        loader: false,
      };
    case CATEGORIES_ERROR:
    case DELETE_CATEGORY_SUCCESS:
    case DELETE_CATEGORY_ERROR:
    case POST_CATEGORY_SUCCESS:
    case POST_CATEGORY_ERROR:
    case PUT_CATEGORY_ERROR:
    case PUT_CATEGORY_SUCCESS:
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

export default categoryReducer;
