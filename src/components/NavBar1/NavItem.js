import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class NavItem extends Component {

  state = {
    hover: ''
  }

  componentDidMount = () => {
    this.setState({hover: false});
  }

  onMouseOver = () => {
    const { onOpen } = this.props

    this.setState({hover: true});
    onOpen()
  }

  onMouseLeave = () => {
    const { onOpen } = this.props

    this.setState({hover: false});
    onOpen()
  }

  render() {
    const { index, path, text, tagline, active } = this.props
    const { hover } = this.state
    return (
      <Container
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        to={path}
        >
        <Index>
          {0 + index}
        </Index>
        <Text hover={hover} active={active}>
          {text}
        </Text>
        <Tagline hover={hover} active={active}>
          {tagline}
        </Tagline>
        <Line hover={hover}/>
      </Container>
    )
  }
}

const Container = styled(Link)`
  display: block;
  margin: 120px auto 80px;
  width: 350px;
  opacity: 0;
  cursor: pointer;

  @media (max-width: 950px){
    margin: 60px auto;
    width: 270px;
  }
`
const Index = styled.h3`
  font-family: ${props => props.theme.navFont};
  font-size: 12pt;
  font-weight: 600;
  color: white;
  opacity: 0.3;
  transform: rotate(-90deg);
  width: 20px;
  pointer-events: none;

`
const Text = styled.h1`
  font-family: ${props => props.theme.navFont};
  font-size: 42pt;
  font-weight: 800;
  color: white;
  margin: -30px 0 0 30px;
  opacity: ${props => props.hover ? 1 : props.active ? 1 : 0.3};
  transition: .3s;
  pointer-events: none;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, .25);

  @media (max-width: 950px){
    margin: -22px 0 0 25px;
    font-size: 24pt;
  }
`
const Tagline = styled.h4`
  margin: 5px 0 0 30px;
  font-family: ${props => props.theme.bodyFont};
  font-size: 14pt;
  font-weight: 600;
  color: ${props => props.theme.accentColor1};
  transition: 0.3s;
  opacity ${props => props.hover ? 1 : props.active ? 1 : 0.3};
  pointer-events: none;

  @media (max-width: 950px){
    font-size: 10pt;
  }
`
const Line = styled.div`
  margin: -50px 0 0 0;
  position: absolute;
  right: -20px;
  width: ${props => props.hover ? 100 : 0}px;
  height: 8px;
  background-color: ${props => props.theme.accentColor1};
  transition: 0.2s;
  pointer-events: none;

  @media (max-width: 950px){
    display: none;
  }
`
