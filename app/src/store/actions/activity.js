import axios from 'axios';

export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const ADD_ACTIVITY_COMPLETE = 'ADD_ACTIVITY_COMPLETE';
export const ADD_ACTIVITY_FAIL = 'ADD_ACTIVITY_FAIL';
export const EDIT_ACTIVITY = 'EDIT_ACTIVITY';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const UPDATE_ACTIVITY_COMPLETE = 'UPDATE_ACTIVITY_COMPLETE';
export const UPDATE_ACTIVITY_FAIL = 'UPDATE_ACTIVITY_FAIL';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const DELETE_ACTIVITY_COMPLETE = 'DELETE_ACTIVITY_COMPLETE';
export const DELETE_ACTIVITY_FAIL = 'DELETE_ACTIVITY_FAIL';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_ACTIVITIES_COMPLETE = 'GET_ACTIVITIES_COMPLETE';
export const GET_ACTIVITIES_FAIL = 'GET_ACTIVITIES_FAIL';
const baseURL = 'https://polar-plateau-24996.herokuapp.com';

export const addActivity = (token, activity) => dispatch => {
  console.log(token, activity);
  dispatch({
    type: ADD_ACTIVITY
  });
  axios
    .post(`${baseURL}/activities`, activity, {
      headers: { Authorization: token }
    })
    .then(res =>
      dispatch({
        type: ADD_ACTIVITY_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_ACTIVITY_FAIL,
        error: err
      })
    );
};

export const editActivity = activity => {
  return {
    type: EDIT_ACTIVITY,
    payload: activity
  };
};


export const updateActivity = (token, activity) => dispatch => {
  axios
    .put(`${baseURL}/activities${activity.id}`, activity, {
      headers: { Authorization: token }
    })
    .then(res =>
      dispatch({
        type: UPDATE_ACTIVITY_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: UPDATE_ACTIVITY_FAIL,
        error: err
      })
    );
};


export const deleteActivity = (token, id) => dispatch => {
  axios
    .delete(`${baseURL}/activities/${id}`, {
      headers: { Authorization: token }
    })
    .then(res =>
      dispatch({
        type: DELETE_ACTIVITY_COMPLETE,
        payload: res.data
      })
    )
    .catch(err => dispatch({type: DELETE_ACTIVITY_FAIL, error: err}))
};

export const getActivities = token => dispatch => {
  dispatch({
    type: GET_ACTIVITIES
  });
  axios
    .get(`${baseURL}/activities`, { headers: { Authorization: token } })
    .then(res =>
      dispatch({
        type: GET_ACTIVITIES_COMPLETE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};