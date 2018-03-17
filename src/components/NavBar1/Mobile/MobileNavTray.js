import React, { Component } from 'react'
import styled from 'styled-components'
import gsap from './Animations'

import LogoIMG from 'assets/SVG/navPakOne.svg'
import Mountains from 'assets/mountain.png'
import Hamburger from 'components/NavBar1/HamburgerIcon'

export default class NavBar extends Component {


  state = {
    open: false
  }

  handleClick = () => {
    const { open } = this.state
    open ? this.setState({ open: false }) : this.setState({ open: true });
    this.openTray();
  }

  openTray = () => {
    gsap.toggleMobileNav(this.state.open);
  }

  render() {
    const { open } = this.state;
    const { children } = this.props;

    return (
      <Container id='nav-tray'>
        <Logo id='nav-logo' src={LogoIMG}/>
        <Hamburger open={open} click={this.handleClick}/>
        <MenuItems id='nav-items'>
          {children}
        </MenuItems>
        <BottomBorder />
      </Container>
    )
  }
}

const Container = styled.div`
  position: fixed;
  height: 70px;
  background-image: url(${Mountains});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.primaryColor};
  transition: 0.3s;
  width: 100%;
  z-index: 1000;
`
const BottomBorder = styled.div`
  position: absolute;
  bottom: -3px;
  height: 3px;
  width: 100%;
  background-color: ${props => props.theme.secondaryColor};
`
const MenuItems = styled.div`
  position: absolute;
  top: 0;
  transition: .3s;
  width: 100%;
  height: 0;
`
const Logo = styled.img`
  position: absolute;
  left: 15px;
  top: 18px;
  width: 120px;
`
