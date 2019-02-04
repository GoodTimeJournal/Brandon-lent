import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Semantic UI
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

import Logo from '../assets/Logo.png';


export default class MenuExampleSecondaryPointing extends Component {


	render() {

		return (
			<div>
				<Menu>
					<Link to='/home'><LogoStyle src={Logo} /></Link>
					{/* <Link to='/home'><Menu.Item name="Journal" /></Link> */}
					<Menu.Menu position="right">
						<Link to="/">
							<Menu.Item
								name="logout"
							/>
						</Link>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}


const LogoStyle = styled.img`
	width: 45px;
	margin-left: 15px;
`