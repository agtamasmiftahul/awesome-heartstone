import React, { Component } from 'react'
import { Menu, Image, Dropdown, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class InfoPanel extends Component {
  render(){
    return(
      <Menu className='infopanelMobile' fluid compact>
        <Menu.Menu position='left'>
          <Link to='/'>
            <Image src='images/logo-text-sm.png' fluid/>
          </Link>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input
              size='mini'
              className='searchbar'
              icon='search'
              iconPosition='left'
              label={
                <Dropdown className='dropdownsearch' text='category'>
                  <Dropdown.Menu className='dropdownsearchmenu'>
                    <Dropdown.Item className='dropdownsearchitem' text='card sets' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='guide' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='adventures' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='forum' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='news' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='heroes' />
                  </Dropdown.Menu>
                </Dropdown>
              }
              labelPosition='right'
              placeholder='Search'
            />
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}
