export const REVIEWS_LOADING = "REVIEWS_LOADING";
export const REVIEWS_LOAD_SUCCEED = "REVIEWS_LOAD_SUCCEED";
export const REVIEWS_LOAD_FAILED = "REVIEWS_LOAD_FAILED";

export const reviewsLoadStart = () => ({ type: REVIEWS_LOADING });

export const reviewsLoadSucceed = reviews => ({
  type: REVIEWS_LOAD_SUCCEED,
  payload: reviews
});

export const reviewsLoadFailed = error => ({
  type: REVIEWS_LOAD_FAILED,
  payload: error
});
