import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item name='Journal' active={activeItem === 'Journal'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Link to='/'><Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
                color='blue'
              /></Link>
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }
  