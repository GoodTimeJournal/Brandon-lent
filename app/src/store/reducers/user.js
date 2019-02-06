import { GET_USER, GET_USER_COMPLETE, GET_USER_FAIL, ADD_USER_START, ADD_USER_FAILURE, ADD_USER_SUCCESS } from '../actions/user';

const initialState = {
  user: {},
  isLoading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, isLoading: true, error: '' };
    case GET_USER_COMPLETE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: ''
      };
    case GET_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };

      
    case ADD_USER_START:
      return { ...state, isLoading: true, error: '' };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: ''
      };
    case ADD_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
