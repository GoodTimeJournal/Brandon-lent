//Action Imports
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
	Accounts: [],
	fetching: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				error: '',
				fetching: true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				testData: [ ...state.testData, ...action.payload ],
				fetching: false,
				error: ''
			};
		case FETCH_FAILURE:
			return {
				...state,
				error: action.payload,
				fetching: false
			};
		default:
			return state;
	}
};

export default reducer;
