import { GET_USER, GET_USER_COMPLETE, GET_USER_FAIL } from '../actions/user';

const initialState = {
  user: {},
  activityLog: [],
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
        activityLog: action.payload.activityLog,
        isLoading: false,
        error: ''
      };

    case GET_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
