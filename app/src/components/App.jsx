//Library Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//File imports
import Login from '../views/Login';
import Home from '../views/Home';
import NewJournal from '../views/NewJournal';
import NewReflection from '../views/NewReflection';
import Journals from '../views/Journals';
import Reflections from '../views/Reflections';


import {getDataFromDatabase} from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.getDataFromDatabase();
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <Login {...props}/>}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/journal' component={Journals} />
        <Route exact path='/reflection' component={Reflections} />
        <Route path='/journal/new' component={NewJournal} />
        <Route path='/reflection/new' component={NewReflection} />
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
