import React, { Component } from 'react'
import Media from 'react-media'

import DesktopNavTray from './Desktop/DesktopNavTray'
import MobileNavTray from './Mobile/MobileNavTray'
import NavItem from './NavItem'

import routes from './routes'

export default class NavBar extends Component {

  state = {
    active: true
  }

  onOpen = () => {
    this.state.active ? this.setState({ active: false }) : this.setState({ active: true })
  }

  render() {
    const { active } = this.state
    return (
      <Media query='(max-width: 950px)'>
        {matches => matches
          ?
          <MobileNavTray>
            {routes.map((item, i) => {
              return (
                <NavItem
                  key={i}
                  onOpen={this.onOpen.bind(this)}
                  index={i.toString()}
                  path={item.path}
                  text={item.text}
                  tagline={item.subText}
                  active={active}
                />
              )
            })}
          </MobileNavTray>
          :
          <DesktopNavTray>
            {routes.map((item, i) => {
              return (
                <NavItem
                  key={i}
                  onOpen={this.onOpen.bind(this)}
                  index={i.toString()}
                  path={item.path}
                  text={item.text}
                  tagline={item.subText}
                  active={active}
                />
              )
            })}
          </DesktopNavTray>
        }
      </Media>
    )
  }
}
