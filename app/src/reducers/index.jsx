import { combineReducers } from 'redux'
import userReducer from './userReducer';
import activityReducer from './activityReducer';
import reflectionReducer from './reflectionReducer';

export default combineReducers({
	userReducer,
	activityReducer,
	reflectionReducer
})

