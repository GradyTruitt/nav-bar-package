import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from 'assets/SVG/navPakFour.svg'

export default class Desktop extends Component {
  state = {
    transparent: true
  }

  onScroll = () => {
    if (typeof window !== 'undefined') {
      window.pageYOffset === 0
        ? this.setState({ transparent: true })
        : this.setState({ transparent: false })
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll)
    }
  }

  render() {
    const { transparent } = this.state
    const { links, button } = this.props

    return (
      <NavBar transparent={transparent.toString()}>
        <MainLogo src={Logo}/>
        <NavLinks>
          {links.map((item, i) => {
            return (
              <NavLink
                key={i}
                to={item.path}
                transparent={transparent.toString()}
              >
                {item.text}
              </NavLink>
            )
          })}
          <Button to={button.path}>
            {button.text}
          </Button>
        </NavLinks>
      </NavBar>
    )
  }
}

const NavBar = styled.div`
  padding: ${props =>
    props.transparent === 'true'
      ? '25px 60px 25px 30px'
      : '15px 60px 15px 30px'};
  width: 100%;
  color: ${props => props.theme.accentColor3};
  background-color: ${props =>
    props.transparent === 'true' ? 'transparent' : 'white'};
  box-shadow: ${props =>
    props.transparent === 'true' ? 'none' : props.theme.shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  transition: 0.5s;
  z-index: 1000;
`
const MainLogo = styled.img`
  width: 150px;
`
const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLink = styled(Link)`
  margin: 0 10px;
  padding: 0 5px 5px;
  font-size: 15pt;
  letter-spacing: -1px;
  font-family: ${props => props.theme.bodyFont};
  font-weight: ${props => props.theme.extraBold};

  &:hover {
    color: ${props => props.theme.primaryColor};
    transition: 0.3s;
  }

  &:active {
    color: ${props => props.theme.primaryColor};
  }
`
const Button = styled(Link)`
  margin: 0 0 0 15px;
  padding: 18px 30px;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 18px;
  font-size: 15pt;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.extraBold};
  line-height: 0;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.theme.accentColor3};
  }
`
