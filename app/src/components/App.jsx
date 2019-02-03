//Library Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//File imports
import LoginPage from './Login/Login';
import Home from './Journal/Journal';
import NewJournalPost from './Journal/NewJournalPost';
import NewReflectionPost from './Journal/NewReflectionPost';
import {getDataFromDatabase} from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.getDataFromDatabase();
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <LoginPage {...props}/>}/>
        <Route exact path='/home' component={Home}/>
        
        <Route path='/journal/new' component={NewJournalPost} />

        <Route path='/reflection/new' component={NewReflectionPost} />
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
