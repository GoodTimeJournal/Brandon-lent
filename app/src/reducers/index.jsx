//Action Imports
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
	testData: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				error: '',
				fetchign: true
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
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
