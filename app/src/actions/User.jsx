//Import axios for database calls
import axios from 'axios';

//Database URL
import { baseURL } from './baseURL';

//Action types
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getUser = dispatch => {
    return dispatch => {
        dispatch({ type: FETCH_START });
        axios.get(`${baseURL}`)
            .then(response => {
                dispatch({ type: FETCH_SUCCESS, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_FAILURE, payload: err })
            })
    }
}