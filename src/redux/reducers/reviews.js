import {
  REVIEWS_LOADING,
  REVIEWS_LOAD_SUCCEED,
  REVIEWS_LOAD_FAILED
} from "../actions/reviews";

const initialState = {
  loading: false,
  succeed: false,
  error: null,
  items: []
};

export const reviewsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case REVIEWS_LOADING:
      return { ...state, loading: true, succeed: false };
    case REVIEWS_LOAD_SUCCEED:
      return { ...state, loading: false, succeed: true, items: payload };
    case REVIEWS_LOAD_FAILED:
      return { ...state, loading: false, succeed: false, error: payload, items: [] };

    default:
      return state;
  }
};
