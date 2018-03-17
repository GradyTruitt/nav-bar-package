import React from 'react'
import styled from 'styled-components'

export default ({ open, transparent, click }) => (
  <Container open={open} onClick={click}>
    <Bar transparent={transparent} open={open} />
    <Bar transparent={transparent} open={open} />
    <Bar transparent={transparent} open={open} />
  </Container>
)

const Container = styled.div`
  width: 30px;
  height: ${props => (props.open === 'true' ? '25px' : '20px')};
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.open === 'true' ? 'center' : 'space-between'};
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: 25px;
  right: 20px;
`
const Bar = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${props => props.theme.primaryColor};
  transform-origin: center;
  transition-duration: 0.2s;
  opacity: ${props => (props.open === 'true' ? 0 : 1)};

  &:first-of-type {
    margin-bottom: ${props => (props.open === 'true' ? '-2px' : 0)};
    transition-duration: 0.5s;
    transform: ${props => (props.open === 'true' ? 'rotate(135deg)' : 'none')};
    opacity: 1;
  }

  &:last-of-type {
    margin-top: ${props => (props.open === 'true' ? '-2px' : 0)};
    transition-duration: 0.3s;
    transform: ${props => (props.open === 'true' ? 'rotate(-135deg)' : 'none')};
    opacity: 1;
  }
`
