export const AUTH_REQUESTED = "AUTH_REQUESTED";
export const AUTH_SUCCEED = "AUTH_SUCCEED";
export const AUTH_FAILED = "AUTH_FAILED";
export const LOG_OUT = "LOG_OUT";

export const authRequested = (userName, password) => ({
  type: AUTH_REQUESTED,
  payload: { userName, password }
});

export const authSucceed = (userName, token) => ({
  type: AUTH_SUCCEED,
  payload: { userName, token }
});

export const authFailed = error => ({
  type: AUTH_FAILED,
  payload: error
});

export const logOut = () => ({
  type: LOG_OUT
});
