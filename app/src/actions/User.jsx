//Import axios for database calls
import axios from "axios";

//Database URL
import { baseURL } from "./baseURL";

//Action types
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_COMPLETE = "LOGIN_USER_COMPLETE";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_COMPLETE = "REGISTER_USER_COMPLETE";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const LOG_OUT = "LOG_OUT";

export const loginUser = user => dispatch => {
  dispatch({
    type: LOGIN_USER
  });
  axios
    .post(`${baseURL}/api/login`, user)
    .then(res =>
      dispatch({
        type: LOGIN_USER_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: LOGIN_USER_FAIL,
        error: err
      })
    );
};

export const logout = () => {
  return {
    type: LOG_OUT
  };
};

export const registerUser = user => dispatch => {
  dispatch({
    type: REGISTER_USER
  });
  axios
    .post(`${baseURL}/api/register`, user)
    .then(res =>
      dispatch({
        type: REGISTER_USER_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: err
      })
    );
};
