import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignupComponent = props => {
  return (
    <Container>
      <LoginContainerStyling>
        <RightContainer>
          {/* Form is styled with css instead of styled components */}
          <LoginForm>
            <img src={Logo} alt="" />
            <form autoComplete="off">
              <TextField
                id="standard-with-placeholder"
                label="Email"
                placeholder="email"
                margin="normal"
                autoComplete="off"
              />
              <TextField
                id="standard-with-placeholder"
                label="Username"
                placeholder="username"
                margin="normal"
              />
              <TextField
                id="standard-with-placeholder"
                label="Password"
                placeholder="password"
                margin="normal"
                type="password"
              />
              <ButtonContainer>
                <Button type="submit" variant="contained">
                  Primary
                </Button>
              </ButtonContainer>
            </form>
          </LoginForm>
        </RightContainer>
      </LoginContainerStyling>
    </Container>
  );
};

export default SignupComponent;

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

  padding: 30px 30px;
  padding-bottom: 20px;
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
    margin-bottom: 25px;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
`;
