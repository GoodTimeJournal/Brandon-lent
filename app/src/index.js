//React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from "react-router-dom";

//Redux Imports
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

//Reducer
import rootReducer from './reducers';

//Custom file imports
import './index.css';
import App from './components/App.jsx';

//Semantic UI
import 'semantic-ui-css/semantic.min.css'

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const AppWithRouter = withRouter(App);


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <AppWithRouter />
        </Provider>
    </Router>,
    document.getElementById('root'));
