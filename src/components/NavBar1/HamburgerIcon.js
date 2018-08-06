import React, { Fragment, Component } from 'react'
import styled from 'styled-components'

export default class HamburgerIcon extends Component {

  state = {
    open: false
  }

  toggleNav = () => {
    const { animating, click } = this.props
    return !animating ?
    (this.setState({ open: !this.state.open }),
    click())
    : null
  }

  render() {
    const { open } = this.state
    return (
      <Container open={open} onClick={this.toggleNav}>
        <OpenLine open={open} />
        {open ?
          <Fragment>
            <CloseLine rotate='plus' open={open} />
            <CloseLine rotate='munus' open={open} />
          </Fragment>
          :
          null}
        <OpenLine open={open} />
        <OpenLine open={open} />
      </Container>
    )
  }
}

const Container = styled.div`
  position: fixed;
  margin: 20px;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1002;

  @media (max-width: 950px) {
    right: 0;
    top: 5px;
  }
`
const OpenLine = styled.div`
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: white;
  opacity: ${props => props.open ? 0 : 1};
  cursor: pointer;
  transition-duration: 0.2s;
  top: 9px;

  ${Container}:hover & {
    border-left: 30px solid ${props => props.theme.accentColor1};
  }

  &:first-of-type {
    top:  0px;
  }

  &:last-of-type {
    top:  18px;
  }
`
const CloseLine = styled.div`
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: white;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-delay: ${props => props.open ? null : '0.2s'};
  top: 9px;
  transform-origin: 50%;
  animation: ${props => props.rotate === 'plus' ? 'plus45 0.3s' : 'minus45 0.3s'};
  animation-fill-mode: forwards;

  ${Container}:hover & {
    border-left: 15px solid ${props => props.theme.accentColor1};
    border-right: 15px solid ${props => props.theme.accentColor1};
  }

  @keyframes plus45 {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(45deg)
    }
  }

  @keyframes minus45 {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(-45deg)
    }
  }
`
