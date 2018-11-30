import {
  LOG_IN,
  LOG_IN_SUCCEED,
  LOG_IN_FAILED,
  LOG_OUT
} from "../actions/logIn";

const initialState = {
  logInLoading: false,
  logedIn: false,
  logInError: null,
  userName: null,
  token: null
};

export const logInReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      return { ...state, logInLoading: true };
    case LOG_IN_SUCCEED:
      return {
        ...state,
        logedIn: true,
        userName: payload.userName,
        token: payload.token
      };
    case LOG_IN_FAILED:
      return { ...state, logInError: payload.error };
    case LOG_OUT:
      return state;

    default:
      return state;
  }
};
