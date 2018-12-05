export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_LOAD_SUCCEED = "PRODUCTS_LOAD_SUCCEED";
export const PRODUCTS_LOAD_FAILED = "PRODUCTS_LOAD_FAILED";

export const productsLoadStart = () => ({ type: PRODUCTS_LOADING });

export const productsLoadSucceed = products => ({
  type: PRODUCTS_LOAD_SUCCEED,
  payload: products
});

export const productsLoadFailed = error => ({
  type: PRODUCTS_LOAD_FAILED,
  payload: error
});
