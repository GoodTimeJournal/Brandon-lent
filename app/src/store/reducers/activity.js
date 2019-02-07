// import CONSTANT_VARIABLE from actions
import {
  ADD_ACTIVITY,
  ADD_ACTIVITY_COMPLETE,
  ADD_ACTIVITY_FAIL,
  EDIT_ACTIVITY,
  UPDATE_ACTIVITY,
  UPDATE_ACTIVITY_COMPLETE,
  UPDATE_ACTIVITY_FAIL,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_COMPLETE,
  DELETE_ACTIVITY_FAIL,
  GET_ACTIVITIES, GET_ACTIVITIES_COMPLETE, GET_ACTIVITIES_FAIL
} from '../actions/activity';

const initialState = {
  activities: [],
  activeEdit: {},
  isLoading: false,
  error: '',
  isEditing: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case GET_ACTIVITIES:
      return { ...state, isLoading: true, error: '' };
    case GET_ACTIVITIES_COMPLETE:
      console.log(action.payload);
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };
    case GET_ACTIVITIES_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case ADD_ACTIVITY:
      return { ...state, isLoading: true, error: '' };
    case ADD_ACTIVITY_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };
    case ADD_ACTIVITY_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case EDIT_ACTIVITY:
      return {
        ...state,
        isEditing: true,
        error: '',
        activeEdit: action.payload
      };
      case UPDATE_ACTIVITY:
      return { ...state, isLoading: true, error: '' };
    case UPDATE_ACTIVITY_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: '',
        activeEdit: {},
        isEditing: false
      };
    case UPDATE_ACTIVITY_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case DELETE_ACTIVITY:
      return { ...state, isLoading: true, error: '' };

    case DELETE_ACTIVITY_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case DELETE_ACTIVITY_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
