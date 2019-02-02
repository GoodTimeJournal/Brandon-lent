//Library Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//File imports
import LoginPage from './Login/Login';
import JournalPage from './Journal/Journal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LoginPage}/>
        <Route path='/Journal' component={JournalPage}/>
      </div>
    );
  }
}

export default App;
