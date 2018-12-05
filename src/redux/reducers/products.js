import {
  PRODUCTS_LOADING,
  PRODUCTS_LOAD_SUCCEED,
  PRODUCTS_LOAD_FAILED
} from "../actions/products";

const initialState = {
  productsLoading: false,
  productsLoaded: false,
  productsLoadError: null,
  products: []
};

export const productsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return { ...state, productsLoading: true, productsLoaded: false };
    case PRODUCTS_LOAD_SUCCEED:
      return { ...state, productsLoading: false, productsLoaded: true, products: payload };
    case PRODUCTS_LOAD_FAILED:
      return { ...state, productsLoading: false, productsLoaded: false, productsLoadError: payload, products: []};

    default:
      return state;
  }
};
