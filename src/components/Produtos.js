import React from 'react'
import styled from 'styled-components'

const Corpo = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    grid-template-rows: 1fr 1fr 1fr ;
    grid-gap: 10px 16px; 
    justify-content: center;
    width: 60vw;
    padding:10px;
    margin-bottom: 20px;
    
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Produtos extends React.Component {
  render() {
    return (
      <Div>
        <Corpo>
         {this.props.children}
        </Corpo>
      </Div>
    )
  }
}
