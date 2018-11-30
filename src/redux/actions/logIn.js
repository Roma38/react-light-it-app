export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCEED = "LOG_IN_SUCCEED";
export const LOG_IN_FAILED = "LOG_IN_FAILED";
export const LOG_OUT = "LOG_OUT";

export const logIn = (userName, password) => ({
  type: LOG_IN,
  payload: { userName, password }
});

export const logInSucceed = (userName, token) => ({
  type: LOG_IN_SUCCEED,
  payload: { userName, token }
});

export const logInFailed = error => ({
  type: LOG_IN_FAILED,
  payload: error
});

export const logOut = () => ({
  type: LOG_OUT
});
