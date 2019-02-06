import React, { Component } from "react";
import NavigationView from "./views/NavigationView";
import "./styles/App.scss";
import MainView from "./views/MainView";
import ActivityFormView from "./views/ActivityFormView";
import LoginView from "./views/LoginView";
import ReflectionFormView from "./views/ReflectionFormView";
import { connect } from "react-redux";
import { Route } from "react-router";
import { logout } from "./store/actions/user";

// import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return this.props.loggedIn ? (
      <>
        <NavigationView logOut={this.logOut} />
        <Route
          exact
          path="/"
          render={props => (
            <MainView {...props} activityLog={this.props.activityLog} />
          )}
        />
        <Route
          path="/activity"
          render={props => <ActivityFormView {...props} />}
        />
        <Route
          path="/reflection"
          render={props => <ReflectionFormView {...props} />}
        />
      </>
    ) : (
      <LoginView logIn={this.logIn} />
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.user.loggedIn };
};

export default connect(
  mapStateToProps,
  { logout }
)(App);
