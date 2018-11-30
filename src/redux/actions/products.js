export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_LOAD_SUCCEED = "PRODUCTS_LOAD_SUCCEED";
export const PRODUCTS_LOAD_FAILED = "PRODUCTS_LOAD_FAILED";

export const poructsLoadStart = () => ({ type: PRODUCTS_LOADING });

export const poructsLoadSucceed = products => ({
  type: PRODUCTS_LOAD_SUCCEED,
  payload:  products 
});

export const poructsLoadFailed = error => ({
  type: PRODUCTS_LOAD_FAILED,
  payload:  error
});
