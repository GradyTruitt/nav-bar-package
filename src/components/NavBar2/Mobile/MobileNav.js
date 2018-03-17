import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from 'assets/SVG/navPakFour.svg'
import Hamburger from './HamburgerIcon'

export default class Mobile extends Component {
  state = {
    transparent: true,
    open: false
  }

  _onScroll = () => {
    if (typeof window !== 'undefined') {
      window.pageYOffset === 0
        ? this.setState({ transparent: true })
        : this.setState({ transparent: false })
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
  }

  render() {
    const { transparent, open } = this.state
    const { links, button } = this.props

    return (
      <NavBar transparent={transparent.toString()} open={open.toString()}>
        <MainLogo src={Logo} />
        <NavLinks open={open.toString()}>
          {open
            ? [
                links.map((item, i) => {
                  return (
                    <NavLink key={i} to={item.path} onClick={this.handleClick}>
                      {item.text}
                    </NavLink>
                  )
                }),
                <Button key={1} to={button.path} onClick={this.handleClick}>
                  {button.text}
                </Button>
              ]
            : null}
        </NavLinks>
        <Hamburger
          transparent={transparent.toString()}
          open={open.toString()}
          click={this.handleClick}
        />
      </NavBar>
    )
  }
}

const NavBar = styled.div`
  width: 100%;
  height: ${props => (props.open === 'true' ? '450px' : '70px')};
  background-color: ${props =>
    props.transparent === 'true' && !(props.open === 'true')
      ? 'transparent'
      : 'white'};
  box-shadow: ${props =>
    (props.transparent ==='true' || props.open === 'true')
    ? 'none' : '0 6px 15px rgba(0, 0, 0, .2)'};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 1000;
`
const MainLogo = styled.img`
  position: fixed;
  top: 25px;
  left: 20px;
  width: 100px;
`
const NavLinks = styled.div`
  margin-top: ${props => (props.open === 'true' ? '50px' : '-200%')};
  width: 100%;
  color: ${props => props.theme.accentColor3};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  transition-delay: ${props => (props.open === 'true' ? '0.2s' : '0s')};
`
const NavLink = styled(Link)`
  margin: 15px 0;
  font-size: 25pt;
  letter-spacing: -1px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.extraBold};
`
const Button = styled(Link)`
  margin: 15px 0;
  padding: 30px 40px;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 30px;
  font-size: 22pt;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.extraBold};
  line-height: 0;
  transition: 0.5s;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
`
