import React, { Fragment } from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

import LogoIMG from 'assets/SVG/navPakOne.svg'
import Mountains from 'assets/mountain.png'

import Provider from '../Context/Provider'
import Context from '../Context'
import NavItem from '../NavItem'
import HamburgerIcon from '../HamburgerIcon'

export default () => (
  <Provider>
    <Context.Consumer>
      {({
        open,
        routes,
        active,
        setActive,
        animating,
        toggleDesktopNav
      }) => (
        <Fragment>
          <HamburgerIcon
            click={() => !animating ? toggleDesktopNav(open, this.trayRef, this.logoRef) : null}
            animating={animating}
          />
          <Container innerRef={ x => {this.trayRef = x}}>
            {routes.map((item, i) => (
              <NavItem
                key={i}
                onOpen={setActive}
                index={i.toString()}
                path={item.path}
                text={item.text}
                tagline={item.subText}
                active={active}
              />
            ))}
          </Container>
          <Logo src={LogoIMG} innerRef={ x => {this.logoRef = x}}/>
        </Fragment>
      )}
    </Context.Consumer>
  </Provider>
)

const Container = styled.div`
  position: fixed;
  padding-top: 80px;
  height: 100vh;
  background-image: url(${Mountains});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.primaryColor};
  width: 75px;
  box-shadow: none;
  z-index: 1000;
  border-right: 5px solid ${props => props.theme.accentColor1};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const Logo = styled.img`
  width: 120px;
  height: 40px;
  transform-origin: 0 0;
  transform: rotate(-90deg);
  position: fixed;
  bottom: 0;
  left: 15px;
  z-index: 1001;
`
