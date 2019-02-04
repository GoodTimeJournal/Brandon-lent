import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/User';

const initialState = {
	user: {},
	error: '',
	isLoading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return { ...state, isLoading: true, error: '' };
		case FETCH_SUCCESS:
			return {
				...state,
				user: action.payload,
				isLoading: false,
				error: ''
			};
		case FETCH_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
