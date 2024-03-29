import {
  AUTH_REQUESTED,
  AUTH_SUCCEED,
  AUTH_FAILED,
  LOG_OUT
} from "../actions/auth";

const initialState = {
  authLoading: false,
  loggedIn: false,
  authError: null,
  userName: null,
  token: null
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUESTED:
      return { ...state, authLoading: true, authError: null };
    case AUTH_SUCCEED:
      return {
        ...state,
        loggedIn: true,
        userName: payload.userName,
        token: payload.token,
        authError: null
      };
    case AUTH_FAILED:
      return { ...state, authError: payload.error };
    case LOG_OUT:
      return { ...state, loggedIn: false, userName: null, token: null};

    default:
      return state;
  }
};
