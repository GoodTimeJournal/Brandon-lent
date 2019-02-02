//Library Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//File imports
import LoginPage from './Login/Login';
import JournalPage from './Journal/Journal';
import NewPost from './Journal/NewPost';
import {getDataFromDatabase} from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.getDataFromDatabase();
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/Journal' component={JournalPage}/>
        <Route path='/Journal/new' component={NewPost} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    Accounts: state.Accounts
  }
}

export default connect(mapStateToProps, { getDataFromDatabase })(App);
