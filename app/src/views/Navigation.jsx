import React, { Component } from "react";
import { Link } from "react-router-dom";

//Semantic UI
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

import Logo from "../assets/Logo.png";

export default class MenuExampleSecondaryPointing extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Menu>
          <div>
            <LogoStyle src={Logo} />
          </div>
          {/* <Link to='/home'><Menu.Item name="Journal" /></Link> */}
          <Menu.Menu position="right">
            <Menu.Item onClick={e => this.props.logOut(e)} name="logout" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const LogoStyle = styled.img`
  width: 45px;
  margin-left: 15px;
`;
