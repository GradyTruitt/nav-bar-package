import React from 'react'
import styled from 'styled-components'

export default ({ open, click }) => (
  <Container open={open} onClick={click}>
    <Bar open={open} />
    <Bar open={open} />
    <Bar open={open} />
  </Container>
)

const Container = styled.div`
  position: absolute;
  margin: 20px;
  width: 30px;
  height: ${props => props.open ? '25px' : '20px'};
  display: flex;
  flex-direction:column;
  justify-content: ${props => props.open ? 'center' : 'space-between'};
  align-items: center;
  cursor: pointer;

  @media (max-width: 950px) {
    right: 0;
    top: 5px;
  }
`
const Bar = styled.div`
  width: 30px;
  height: 2px;
  background-color: white;
  transform-origin: center;
  transition-duration: 0.2s;
  opacity: ${props => props.open ? 0 : 1};

  ${Container}:hover & {
    border-left: 30px solid ${props => props.theme.accentColor1};
  }

  &:first-of-type {
    margin-bottom: ${props => props.open ? '-2px' : 0};
    transition-duration: 0.5s;
    transform: ${props => props.open ? 'rotate(135deg)' : 'none'};
    opacity: 1;
  }

  &:last-of-type {
    margin-top: ${props => props.open ? '-2px' : 0};
    transition-duration: 0.3s;
    transform: ${props => props.open ? 'rotate(-135deg)' : 'none'};
    opacity: 1;
  }
`
