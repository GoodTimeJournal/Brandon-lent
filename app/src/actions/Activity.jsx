import axios from 'axios';

//Post variables
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const ADD_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS';
export const ADD_ACTIVITY_FAIL = 'ADD_ACTIVITY_FAIL';

//Put variables
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const UPDATE_ACTIVITY_SUCCESS = 'UPDATE_ACTIVITY_SUCCESS';
export const UPDATE_ACTIVITY_FAIL = 'UPDATE_ACTIVITY_FAIL';

//Delete variables
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const DELETE_ACTIVITY_SUCCESS = 'DELETE_ACTIVITY_SUCCESS';
export const DELETE_ACTIVITY_FAIL = 'DELETE_ACTIVITY_FAIL';

//base URL
import { baseURL } from './baseURL';

//Create
export const addActivity = (activity) => (dispatch) => {
	dispatch({ type: ADD_ACTIVITY });
	axios
		.post(`${baseURL}`, activity)
		.then((res) =>
			dispatch({
				type: ADD_ACTIVITY_SUCCESS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: ADD_ACTIVITY_FAIL,
				error: err
			})
		);
};

//Update
export const updateActivity = (activity) => (dispatch) => {
	axios
		.put(`${baseURL}`, activity)
		.then((res) =>
			dispatch({
				type: UPDATE_ACTIVITY_SUCCESS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: UPDATE_ACTIVITY_FAIL,
				error: err
			})
		);
};

//Delete
// DOES NOT WORK -- NEED TO GET API URL.
export const deleteActivity = (id) => (dispatch) => {
	axios.delete(`${baseURL}/${id}`).then((res) =>
		dispatch({
			type: DELETE_ACTIVITY,
			payload: res.data
		})
	);
};
