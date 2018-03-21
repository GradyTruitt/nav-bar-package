import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import gsap from './Animations'

import Logo from 'assets/SVG/navPakTwo.svg'
import Logo2 from 'assets/SVG/navPakFour.svg'
// import GitHub from 'icons/github-icon.svg'

import Hamburger from './HamburgerIcon'

export default class NavBar extends Component {

  state = {
    open: false,
    menu: 'slideOut'
  }

  _onScroll = () => {
    if (typeof window !== 'undefined') {
      window.pageYOffset > (window.innerHeight - 200)
        ? this.setState({ menu: 'fixedTop' })
        : this.setState({ menu: 'slideOut' })
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
        {menu === 'slideOut'
        ? <SlideOut id='side-nav-tray'>
              <Hamburger
                open={open.toString()}
                click={this.handleClick}
              />
              <SideNavItems id='side-nav-items'>
                {routes.map((item, i) => {
                    return(
                      <NavLink1 to={item.path}>
                        {item.text}
                      </NavLink1>
                  )})}
                <SideTrayLogo src={Logo2} />
              </SideNavItems>
            </SlideOut>
          : null}
        <FixedTop>
          {menu === "fixedTop"
          ? routes.map((item, i) => {
            return(
              <NavLink to={item.path}>
                {item.text}
              </NavLink>
          )})
          : null}
        </FixedTop>
        <LogoContainer menu={menu}>
          <Link to="/">
          <MainLogo menu={menu}/>
        </Link>
      </LogoContainer>
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
  background-color: ${props => props.menu === 'slideOut' ? 'rgba(0, 0, 0, 0.4)' : 'white'};
  box-shadow: ${props => props.menu === 'slideOut' ? 'none' : '0 3px 10px rgba(0, 0, 0, 0.15)'};
  transition-duration: 0.5s;
  z-index: 2000;
`
const SlideOut = styled.div`
  width: 0;
  transition-duration: 0.5s;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
`
const SideNavItems = styled.div`
  width: 0;
  margin: 130px auto;
  transition-duration: 0.5s;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`
const NavLink1 = styled(Link)`
  margin: 60px 0 10px;
  font-size: 24pt;
  opacity: 0;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.extraBold};
  color: ${props => props.theme.primaryColor};
  transition-duration: 0.3s;

  &:hover {
    color: ${props => props.theme.accentColor1};
  }
`
const SideTrayLogo = styled.img`
  position: fixed;
  left: 130px;
  bottom: 10px;
  width: 100px;
  opacity: 0;
`
const LogoContainer = styled.div`
  position: fixed;
  top: 22px;
  left: ${props => props.menu === 'slideOut' ? 'calc( 50% - 25px)' : '20px'};
  transition-duration: 0.3s;
`
const MainLogo = styled.div`
  width: ${props => props.menu === 'slideOut' ? 57 : 150}px;
  height: 50px;
  transition-duration: 0.5s;
  background-image: url(${props => props.menu === 'slideOut' ? Logo : Logo2});
  background-repeat: no-repeat;
`
const FixedTop = styled.div`
  position: fixed;
  top: 0;
  right: 180px;
  height: 85px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const NavLink = styled(Link)`
  margin: 0 10px;
  font-size: 14pt;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.extraBold};
  color: ${props => props.theme.primaryColor};
  transition-duration: 0.3s;

  &:hover {
    color: ${props => props.theme.accentColor3};
  }
`
const Button = styled(Link)`
  position: fixed;
  right: 30px;
  top: 20px;
  padding: 22px 35px;
  color: white;
  border-radius: 22px;
  line-height: 0pt;
  font-size: 14pt;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily};
  letter-spacing: -1px;
  box-shadow: 0 6 10 rgba(0, 0, 0, .9);
  text-align: center;
  background-color: ${props => props.theme.primaryColor};
  transition-duration: 0.5s;

  &:hover {
    background-color: ${props => props.theme.accentColor3};
  }
`
