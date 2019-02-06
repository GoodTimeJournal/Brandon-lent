import {
  LOGIN_USER,
  LOGIN_USER_COMPLETE,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_COMPLETE,
  REGISTER_USER_FAIL,
  LOG_OUT
} from '../actions/user';

const initialState = {
  user: {},
  isLoading: false,
  error: '',
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_USER_COMPLETE:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('id', action.payload.userId);
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        loggedIn: true,
        error: ''
      };
    case LOGIN_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case LOG_OUT:
      return { ...state, loggedIn: false, token: '' };
    case REGISTER_USER:
      return { ...state, isLoading: true, error: '' };
    case REGISTER_USER_COMPLETE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: ''
      };
    case REGISTER_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
