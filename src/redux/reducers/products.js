import {
  PRODUCTS_LOADING,
  PRODUCTS_LOAD_SUCCEED,
  PRODUCTS_LOAD_FAILED
} from "../actions/products";

const initialState = {
  loading: false,
  succeed: false,
  error: null,
  items: []
};

export const productsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return { ...state, loading: true, succeed: false };
    case PRODUCTS_LOAD_SUCCEED:
      return { ...state, loading: false, succeed: true, items: payload };
    case PRODUCTS_LOAD_FAILED:
      return { ...state, loading: false, succeed: false, error: payload, items: [] };

    default:
      return state;
  }
};
