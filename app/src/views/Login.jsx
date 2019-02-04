import React, { Component } from "react";
import LoginComponent from "../components/Login/LoginComponent";
import SignupComponent from "../components/Login/SignupComponent";

export default class Login extends Component {
  state = {
    signUp: false
  };

  redirect = e => {
    e.preventDefault();
    this.setState({ signUp: !this.state.signUp });
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
