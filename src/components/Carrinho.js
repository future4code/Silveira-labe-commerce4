import React from 'react'
import styled from 'styled-components'

const CarrinhoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100vh; 
    width: 15vw; 
    padding: 10px;
    margin-bottom: 20px;
`
export default class Carrinho extends React.Component {
  render() {
    return (
        <CarrinhoContainer/>
    )
  }
}
