import React, { Component } from 'react'
import animate from './animations'

import Context from './index.js'
import routes from './routes'

const desktopDelay = 1100
const mobileDelay = 1000

export default class Provider extends Component {
  state = {
    open: false,
    routes: routes,
    active: true,
    animating: false,
    setActive: () => {
      this.setState({ active: !this.state.active})
    },
    toggleDesktopNav: (open, tray, logo) => {
      this.setState({ open: !this.state.open})
      animate.toggleDesktopNav(open, tray, logo)
      this.setState({ animating: !this.state.animating })
      setTimeout(() => { this.setState({ animating: !this.state.animating })}, desktopDelay)
    },
    toggleMobileNav: (open, tray) => {
      this.setState({ open: !this.state.open})
      animate.toggleMobileNav(open, tray)
      this.setState({ animating: !this.state.animating })
      setTimeout(() => { this.setState({ animating: !this.state.animating })}, mobileDelay)
    }
  }

  componentDidMount = () => console.log(this.state.open)

  render() {
    const { children } = this.props
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    )
  }
}
