import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares)
  )
);

export default store;
