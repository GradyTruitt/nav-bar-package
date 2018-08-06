import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import backgroundImage from 'assets/background.jpg'

import ScrollToTop from 'components/ScrollToTop'
import NavBar from 'components/NavBar1'
import NavBar2 from 'components/NavBar2'
import NavBar3 from 'components/NavBar3'

import Home from './Home'
import Services from './Services'
import Company from './Company'
import Work from './Work'
import Contact from './Contact'

export default class App extends Component {

  state = {
    menu: 'One'
  }

  changeMenu = (e) => {
    this.setState({ menu: e.target.value})
  }

render() {
  const { menu } = this.state

  return (
    <Fragment>
      <ScrollToTop />
      { menu === 'One'
      ? (<NavBar/>)
      : menu === 'Two'
      ? (<NavBar2/>)
      : menu === 'Three'
      ? (<NavBar3/>)
      :
      null
      }
      <Background>
        <Header>
          <Overlay>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/company" component={Company} />
              <Route path="/services" component={Services} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <Buttons>
              <Button
                value="One"
                onClick={this.changeMenu}
                menu={menu}
                >
                Menu 1
              </Button>
              <Button
                value="Two"
                onClick={this.changeMenu}
                menu={menu}
                >
                Menu 2
              </Button>
              <Button
                value="Three"
                onClick={this.changeMenu}
                menu={menu}
                >
                Menu 3
              </Button>
              <Scroll show={menu}>Scroll to bottom for effect.</Scroll>
            </Buttons>
          </Overlay>
        </Header>
      </Background>
    </Fragment>
  )
}
}
const Background = styled.div`
  width: 100%;
  padding-bottom: calc(100vh + 100px);
  background-color: ${props => props.theme.primaryColor};
`
const Header = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
`
const Overlay = styled.div`
  padding: 150px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.45);

  @media (max-width: ${props => props.theme.desktop}px) {
    padding: 100px 0 0;
  }
`
const Scroll = styled.h1`
  position: fixed;
  text-align: center;
  width: 100%;
  bottom: 10px;
  font-size: 16pt;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.extraBold};
  color: ${props => props.theme.primaryColor};
  transition-duration: 0.5s;
  color: ${props => props.theme.primaryColor};
  opacity: ${props => props.show !== 'One' ? 1 : 0};
`
const Buttons = styled.div`
  padding: 10px 10% 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  background-color: white;
`
const Button = styled.button`
  margin: 15px;
  padding: 25px 60px;
  height: 0;
  line-height: 0;
  font-size: 14pt;
  color: ${props => props.menu === props.value ? 'white' : props.theme.primaryColor};
  background: ${props => props.menu === props.value ? props.theme.primaryColor : 'transparent'};
  outline: none;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 30px;
  transition-duration: 0.6s;

  &:hover {
    background: ${props => props.theme.primaryColor};
    color: white;
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.desktop}px) {
    margin: 5px;
  }
`
