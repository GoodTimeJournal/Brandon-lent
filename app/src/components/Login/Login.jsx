import React from "react";
import styles from "styled-components";
import Logo from "../../styles/nav-logo.png";
import GoogleSignIn from "../../styles/btn_google_signin_dark_normal_web@2x.png";

const Login = props => {
  return (
    <LoginPageStyles>
      <LoginMenuStyles onSubmit={props.logIn}>
        <LogoImage src={Logo} />
        <br />
        <LogoImage src={GoogleSignIn} />
        <SeperateContent>
          <hr />
          <p>or</p>
          <hr />
        </SeperateContent>
        <LoginInputStyles
          placeholder="Username"
          onChange={props.handleChange}
          name="currentUsername"
          value={props.currentUsername}
          required
          minLength="4"
        />
        <LoginInputStyles
          placeholder="Password"
          onChange={props.handleChange}
          name="currentPassword"
          value={props.currentPassword}
          required
          minLength="6"
          type="password"
        />
        <LoginButton>Login</LoginButton>
        <br />
        <p>Forgot your password?</p>
      </LoginMenuStyles>
      <SwitchMenuStyles>
        <CreateAccount onClick={props.switchView}>Create Account</CreateAccount>
      </SwitchMenuStyles>
    </LoginPageStyles>
  );
};

export default Login;

const LoginPageStyles = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #FAFAFA;
 `;

const LoginMenuStyles = styles.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  width: 340px;
  background: #FFFFFF;
  padding: 20px 0;
`;

const LoginInputStyles = styles.input`
  border: 1px solid #EFEFEF;
  border-radius: 3px;
  margin-bottom: 7px;
  padding: 10px 0 10px 7px;
  width: 270px;
  background: #FAFAFA;

  &:focus {
    outline: none;
  }
`;

const LoginButton = styles.button`
  width: 272px;
  border: 1px solid #4F86EC;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background: #4F86EC;
  &:hover {
    cursor: pointer;
  }
`;

const SwitchMenuStyles = styles.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  width: 340px;
  background: #FFFFFF;
  padding: 20px 0;
  margin-top: 15px;
`;

const SeperateContent = styles.div`
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
    font-size: 14px;
		color: #999999;
  }
`;

const LogoImage = styles.img`
  width: 200px;
  margin-bottom: 10px;
`;

const CreateAccount = styles.p`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
`;
