import React from 'react'
import styled from 'styled-components'

const Corpo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;
    width: 60vw;
    height: 100vh;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    
`

export default class Produtos extends React.Component {
  render() {
    return (
      <Corpo>
         {this.props.children}
      </Corpo>
    )
  }
}
