import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { render } from '@testing-library/react';


export default class App extends React.Component {
  state = {
    homePage: [{
      valorMinimo: "",
      valorMaximo: "",
      BuscaPorNome: "",
      ordenacao: "Crescente",

    }],
    carrinho: [{}]
  }
}
render(){
  return (
    <div>
      <input placeholder='' value={this.state.valorMinimo} />
      <input placeholder='' value={this.state.valorMaximo} />
    </div>
  )
}