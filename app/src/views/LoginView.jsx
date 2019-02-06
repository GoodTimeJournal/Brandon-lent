import React, { Component } from "react";

import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import { saveUser, getUser } from "../store/actions/user";

import { connect } from "react-redux";

class LoginView extends Component {
  state = {
    isNewUser: false,
    user: {
      username: "",
      password: ""
    }
  };

  switchView = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isNewUser: !prevState.isNewUser
    }));
  };

  registerUser = e => {
    e.preventDefault();
    this.props.saveUser(this.state.user);
    //this.redirect();
  };

  loginUser = e => {
    e.preventDefault();
    this.props.getUser(this.state.user);
  };

  handleChange = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ ...this.state, user: { [e.target.name]: e.target.value } });
  };

  render() {
    return this.state.isNewUser ? (
      <Register
        registerUser={this.registerUser}
        handleChange={this.handleChange}
        switchView={this.switchView}
      />
    ) : (
      <Login
        loginUser={this.loginUser}
        handleChange={this.handleChange}
        switchView={this.switchView}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUser, saveUser }
)(LoginView);
