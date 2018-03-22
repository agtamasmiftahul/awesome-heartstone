import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

export default class MenuBar extends Component {
  render(){
    return(
      <Menu className='menubar' fluid compact>
        <Menu.Item>
          <Dropdown className='menu-link' text='Game Guides'>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className='menu-link' text='Card Sets'>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className='menu-link' text='Community'>
          </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
}
