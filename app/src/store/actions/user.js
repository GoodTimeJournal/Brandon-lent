import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_COMPLETE = 'GET_USER_COMPLETE';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

const baseURL = 'https://polar-plateau-24996.herokuapp.com'

export const getUser = userData => dispatch => {
  dispatch({
    type: GET_USER
  });
  axios
    .post(`${baseURL}/api/login`, userData)
    .then(res =>
      dispatch({
        type: GET_USER_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_FAIL,
        error: err
      })
    );
};

export const saveUser = userData => dispatch => {
  dispatch({ type: ADD_USER_START });
  axios
    .post(`${baseURL}/api/register`, userData)
    .then(res =>
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_USER_FAILURE,
        error: err
      })
    );
};
