import React, { Fragment } from 'react'
import styled from 'styled-components'

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
        toggleMobileNav
      }) => (
        <Fragment>
          <HamburgerIcon
            click={() => !animating ? toggleMobileNav(open, this.trayRef) : null}
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
          <Logo src={LogoIMG} />
        </Fragment>
      )}
    </Context.Consumer>
  </Provider>
)
const Container = styled.div`
  padding-top: 70px;
  position: fixed;
  height: 73px;
  max-height: 900px;
  background-image: url(${Mountains});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 15px rgba(0,0,0,0.25);
  overflow: hidden;
  border-bottom: 3px solid ${props => props.theme.accentColor1};
`
const Logo = styled.img`
  position: fixed;
  left: 15px;
  top: 18px;
  width: 120px;
  z-index: 1003;
`
