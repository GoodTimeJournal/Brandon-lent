import React, { Component } from "react";

import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import { saveUser, getUser } from "../store/actions/user";

import { connect } from "react-redux";

class LoginView extends Component {
  state = {
    isNewUser: false,
    fullname: "",
    email: "",
    username: "",
    password: ""
  };

  switchView = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isNewUser: !prevState.isNewUser
    }));
  };

  registerUser = e => {
    e.preventDefault();
    const { fullName, email, username, password } = this.state;
    this.props.saveUser({ fullName, email, username, password });
    //this.redirect();
  };

  loginUser = e => {
    e.preventDefault();
    const { fullname, email, username, password } = this.state;
  };

  saveRegisterData = e => {
    //Change the view after registered
    this.switchView();
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
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
        switchView={this.switchView}
        logIn={this.props.logIn}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    saveUser: state.saveUser,
    getUser: state.getUser
  };
};

export default connect(
  mapStateToProps,
  { saveUser, getUser }
)(LoginView);
