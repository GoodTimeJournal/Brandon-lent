import axios from 'axios';

//Post variables
export const ADD_REFLECTION = 'ADD_REFLECTION';
export const ADD_REFLECTION_SUCCESS = 'ADD_REFLECTION_SUCCESS';
export const ADD_REFLECTION_FAIL = 'ADD_REFLECTION_FAIL';

//Put variables
export const UPDATE_REFLECTION = 'UPDATE_REFLECTION';
export const UPDATE_REFLECTION_SUCCESS = 'UPDATE_REFLECTION_SUCCESS';
export const UPDATE_REFLECTION_FAIL = 'UPDATE_REFLECTION_FAIL';

//Delete variables
export const DELETE_REFLECTION = 'DELETE_REFLECTION';
export const DELETE_REFLECTION_SUCCESS = 'DELETE_REFLECTION_SUCCESS';
export const DELETE_REFLECTION_FAIL = 'DELETE_REFLECTION_FAIL';

//base URL
import {baseURL} from './baseURL';

//Create
export const addReflection = (reflection) => (dispatch) => {
	dispatch({ type: ADD_REFLECTION });
	axios
		.post(`${baseURL}`, reflection)
		.then((res) =>
			dispatch({
				type: ADD_REFLECTION_SUCCESS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: ADD_REFLECTION_FAIL,
				error: err
			})
		);
};

//Update
export const updateReflection = (reflection) => (dispatch) => {
	axios
		.put(`${baseURL}`, reflection)
		.then((res) =>
			dispatch({
				type: UPDATE_REFLECTION_SUCCESS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: UPDATE_REFLECTION_FAIL,
				error: err
			})
		);
};

//Delete

export const deleteReflection = (id) => (dispatch) => {
	axios.delete(`${baseURL}/${id}`).then((res) =>
		dispatch({
			type: DELETE_REFLECTION,
			payload: res.data
		})
	);
};
