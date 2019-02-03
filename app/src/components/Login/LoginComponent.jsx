import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/DYLLogo.png';

const LoginPage = (props) => {
	return (
		<Container>
			<LoginContainerStyling>
				<RightContainer>
					{/* Form is styled with css instead of styled components */}
					<LoginForm>
						<img src={Logo} alt="Background" />
						<Form onSubmit={() => props.props.history.push('/home')} className="custom-form">
							<FormGroup>
								<Input
									required
									type="text"
									name="username"
									placeholder="Phone number, username, or email"
								/>
							</FormGroup>
							<FormGroup>
								<Input required type="password" name="password" placeholder="Password" />
							</FormGroup>
							<Button type="submit" size="sm" block color="primary">
								Submit
							</Button>
						</Form>
						<SeperateContent>
							<hr />
							<p>OR</p>
							<hr />
						</SeperateContent>
						<Signup>
							<div>
								<i className="fab fa-facebook" />
								<Link to="/signup">
									<strong>Log in with Facebook</strong>
								</Link>
							</div>
						</Signup>
					</LoginForm>
					<SignUpForm>
						<p>
							Don't have an account? <Link to="/signup">Sign up</Link>
						</p>
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

const LeftContainer = styled.div`
	margin-right: 24px;
	img {
		height: 600px;
	}
	@media (max-width: 700px) {
		display: none;
	}
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
		width: 60%;
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
