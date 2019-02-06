// import CONSTANT_VARIABLE from actions
import {
  ADD_REFLECTION,
  ADD_REFLECTION_COMPLETE,
  ADD_REFLECTION_FAIL,
  UPDATE_REFLECTION,
  UPDATE_REFLECTION_COMPLETE,
  UPDATE_REFLECTION_FAIL,
  DELETE_REFLECTION,
  DELETE_REFLECTION_COMPLETE,
  DELETE_REFLECTION_FAIL
} from '../actions/reflection';

const initialState = {
  reflections: [],
  isLoading: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_REFLECTION:
      return { ...state, isLoading: true, error: '' };

    case ADD_REFLECTION_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case ADD_REFLECTION_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case UPDATE_REFLECTION:
      return { ...state, isLoading: true, error: '' };

    case UPDATE_REFLECTION_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case UPDATE_REFLECTION_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case DELETE_REFLECTION:
      return { ...state, isLoading: true, error: '' };

    case DELETE_REFLECTION_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case DELETE_REFLECTION_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
