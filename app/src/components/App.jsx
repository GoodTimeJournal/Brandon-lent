//Library Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//File imports
import LoginPage from './Login/Login';
import JournalPage from './Journal/Journal';
import NewPost from './Journal/NewPost';


class App extends Component {
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

export default App;
