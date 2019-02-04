//Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

//File imports
import Login from "../views/Login";
import Home from "../views/Home";
// import NewJournal from "../views/NewJournal";
// import NewReflection from "../views/NewReflection";
// import Journals from "../views/Journals";
// import Reflections from "../views/Reflections";

import { getUser } from "../actions/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  componentDidMount() {
    //Get the user once this component mounts.
    this.props.getUser();
  }

  logIn = e => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  logOut = e => {
    e.preventDefault();
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      //Need to implement single page functionality.
      <div className="App">
        {this.state.isLoggedIn ? (
          <Home logOut={this.logOut} />
        ) : (
          <Login logIn={this.logIn} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Accounts: state.Accounts
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(App);
