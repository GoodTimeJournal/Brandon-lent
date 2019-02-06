import React, { Component } from "react";
import LoginComponent from "../components/Login/LoginComponent";
import SignupComponent from "../components/Login/SignupComponent";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../actions/User";

class Login extends Component {
  state = {
    isNewUser: false,
    user: {
      username: "",
      password: ""
    }
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser(this.state.user);
    this.setState({
      isNewUser: false
    });
  };

  loginUser = e => {
    e.preventDefault();
    this.props.loginUser(this.state.user);
  };

  redirect = e => {
    e.preventDefault();
    this.setState({ isNewUser: !this.state.signUp });
  };

  handleChange = e => {
    if (isNaN(e.target.value)) {
      this.setState({
        ...this.state,
        activity: {
          ...this.state.activity,
          [e.target.name]: e.target.value
        }
      });
    } else
      this.setState({
        ...this.state,
        activity: {
          ...this.state.activity,
          [e.target.name]: parseInt(e.target.value)
        }
      });
  };

  render() {
    return (
      <>
        {this.state.signUp ? (
          <SignupComponent redirect={this.redirect} />
        ) : (
          <LoginComponent
            redirect={this.redirect}
            logIn={this.props.logIn}
            props={this.props}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: false
  };
};

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(Login);
