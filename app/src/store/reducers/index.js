import { combineReducers } from 'redux';

import activity from './activity';
import reflection from './reflection';
import user from './user';

export default combineReducers({
  activity,
  reflection,
  user
});
