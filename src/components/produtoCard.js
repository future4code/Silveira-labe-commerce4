import { normalize } from '@testing-library/jest-dom/dist/utils'
import React, { Component } from 'react'
import App from '../App'

const Button = styled.button`
align-self: center;
margin-top: 4px;
`

export default class produtoCard extends React.Component {
  render() {
      const produtos = this.props.produtos
    return <container>
        <img src={foto.produto}/>
        <produtoCard>
          <p>{nome.produto}</p>  
          <p>R${preco.produto},00</p>
          <Button onClick={this.prop}>Adicionar ao carrinho</Button>
        </produtoCard>
      <div>produtoCard</div>
      </container>
    
  }
}
