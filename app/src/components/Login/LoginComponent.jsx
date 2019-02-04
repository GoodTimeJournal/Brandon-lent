import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, Form, FormGroup, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo.png";

const LoginPage = props => {
  return (
    <Container>
      <LoginContainerStyling>
        <RightContainer>
          {/* Form is styled with css instead of styled components */}
          <LoginForm>
            <img src={Logo} alt="Background" />
            <Form onSubmit={e => props.logIn(e)} className="custom-form">
              <FormGroup>
                <Input
                  required
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" size="sm" block color="primary">
                Submit
              </Button>
            </Form>
            <Signup>
              <div>
                <i className="fab fa-facebook" />
                <Link to="#">
                  <strong>Log in with Facebook</strong>
                </Link>
              </div>
            </Signup>
          </LoginForm>
          <SignUpForm>
            <p>Don't have an account?</p>{" "}
            <span>
              {" "}
              <Button
                onClick={e => props.redirect(e)}
                outline
                size="sm"
                block
                color="primary"
              >
                Sign up
              </Button>
            </span>
          </SignUpForm>
        </RightContainer>
      </LoginContainerStyling>
    </Container>
  );
};

export default LoginPage;

//Styles

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    181deg,
    rgba(66, 205, 255, 1) 0%,
    rgba(66, 205, 255, 1) 0%,
    rgba(66, 205, 255, 1) 7%,
    rgba(0, 128, 128, 1) 100%
  );
`;

const LoginContainerStyling = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  height: 600px;
  width: 350px;
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    font-size: 14px;
  }
`;

const LoginForm = styled.div`
  border: 1px solid #e6e6e6;
  height: 356px;
  padding: 30px 30px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 25px;
  border-radius: 3px;
  background-color: white;
  img {
    width: 40%;
    margin-bottom: 20px;
  }
  form {
    font-size: 3px;
  }
`;
const SignUpForm = styled.div`
  border: 1px solid #e6e6e6;
  height: 70px;
  margin-bottom: 25px;
  border-radius: 3px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
  span {
    margin-left: 5px;
  }
`;

const SeperateContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin: 5px auto;
  hr {
    height: 1px;
    width: 100%;
    color: #999999;
  }
  p {
    margin: 0 10px;
    color: #999999;
  }
`;
const Signup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3c5181;
  margin-top: 20px;
  a {
    color: #3c5181;
    font-size: 14px;
    margin-left: 5px;
  }
  p {
    color: #34547d;
    font-size: 12px;
    margin-top: 15px;
  }
`;
