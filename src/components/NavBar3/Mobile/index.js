import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import gsap from './Animations'

import Logo from 'assets/SVG/navPakTwo.svg'
import Logo2 from 'assets/SVG/navPakFive.svg'

import Hamburger from './HamburgerIcon'

export default class NavBar extends Component {

  state = {
    open: false,
    menu: 'transparent'
  }

  _onScroll = () => {
    if (typeof window !== 'undefined') {
      window.pageYOffset > (window.innerHeight - 200)
        ? this.setState({ menu: 'white' })
        : this.setState({ menu: 'transparent' })
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.onScroll = window.addEventListener('scroll', this._onScroll)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this._onScroll)
    }
  }

  handleClick = () => {
    const { open } = this.state
    open ? this.setState({ open: false }) : this.setState({ open: true })

    gsap.toggleMobileNav(open)
  }

  render() {
    const { open, menu } = this.state
    const { routes, button } = this.props

    return (
      <Container menu={menu}>
          <SlideOut id='side-nav-tray'>
              <Hamburger
                open={open.toString()}
                color={menu}
                click={this.handleClick}
              />
              <SideNavItems id='side-nav-items'>
                {
                  routes.map((item, i) => {
                    return(
                      <NavLink to={item.path}>
                        {item.text}
                      </NavLink>
                  )})
                }
              </SideNavItems>
            </SlideOut>
        <MainLogo menu={menu} />
      <Button to={button.path}>{button.text}</Button>
    </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 85px;
  padding: 20px 40px;
  position: fixed;
  background-color: ${props => props.menu === 'transparent' ? 'rgba(0, 0, 0, 0.4)' : 'white'};
  box-shadow: ${props => props.menu === 'transparent' ? 'none' : '0 3px 10px rgba(0, 0, 0, 0.15)'};
  transition-duration: 0.5s;
  z-index: 2000;
`
const SlideOut = styled.div`
  width: 0;
  transition-duration: 0.5s;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
`
const SideNavItems = styled.div`
  width: 0;
  margin: 130px auto;
  transition-duration: 0.5s;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
`
const NavLink = styled(Link)`
  margin: 40px 0 10px;
  font-size: 18pt;
  opacity: 0;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.extraBold};
  color: ${props => props.theme.primaryColor};
  transition-duration: 0.3s;
  text-align: right;

  &:hover {
    color: ${props => props.theme.accentColor2};
  }
`
const MainLogo = styled.div`
  position: fixed;
  top: 15px;
  left: 20px;
  width: 70px;
  height: 55px;
  background-image: url(${props => props.menu === 'transparent' ? Logo : Logo2});
  background-repeat: no-repeat;
`
const Button = styled(Link)`
  position: fixed;
  right: 90px;
  top: 20px;
  padding: 22px 30px;
  color: white;
  border-radius: 22px;
  line-height: 0pt;
  font-size: 14pt;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily};
  box-shadow: 0 6 10 rgba(0, 0, 0, .9);
  text-align: center;
  background-color: ${props => props.theme.primaryColor};
`
