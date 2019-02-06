import axios from 'axios';

export const ADD_REFLECTION = 'ADD_REFLECTION';
export const ADD_REFLECTION_COMPLETE = 'ADD_REFLECTION_COMPLETE';
export const ADD_REFLECTION_FAIL = 'ADD_REFLECTION_FAIL';
export const OPEN_REFLECTION = 'OPEN_REFLECTION';
export const UPDATE_REFLECTION = 'UPDATE_REFLECTION';
export const UPDATE_REFLECTION_COMPLETE = 'UPDATE_REFLECTION_COMPLETE';
export const UPDATE_REFLECTION_FAIL = 'UPDATE_REFLECTION_FAIL';
export const DELETE_REFLECTION = 'DELETE_REFLECTION';
export const DELETE_REFLECTION_COMPLETE = 'DELETE_REFLECTION_COMPLETE';
export const DELETE_REFLECTION_FAIL = 'DELETE_REFLECTION_FAIL';

export const addReflection = reflection => dispatch => {
  dispatch({
    type: ADD_REFLECTION
  });
  axios
    .post(`http://localhost:5000/api/user/reflection`, reflection)
    .then(res =>
      dispatch({
        type: ADD_REFLECTION_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_REFLECTION_FAIL,
        error: err
      })
    );
};

export const openReflection = reflection => {
  return {
    type: OPEN_REFLECTION,
    payload: reflection
  };
};

export const updateReflection = reflection => dispatch => {
  axios
    .put(
      `http://localhost:5000/api/user/reflection/${reflection.id}`,
      reflection
    )
    .then(res =>
      dispatch({
        type: UPDATE_REFLECTION_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: UPDATE_REFLECTION_FAIL,
        error: err
      })
    );
};

export const deleteReflection = id => dispatch => {
  axios.delete(`http://localhost:5000/api/user/reflection/${id}`).then(res =>
    dispatch({
      type: DELETE_REFLECTION,
      payload: res.data
    })
  );
};
