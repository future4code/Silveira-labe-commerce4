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

onChangevalorMaximo = (event) =>{
  this.setState({valorMaximo:event.target.value})
}
onChangevalorMinimo = (event) =>{
  this.setState({valorMinimo:event.target.value})
}
onChangeBuscaPorNome = (event) => {
  this.setState({BuscaPorNome:event.target.value})
}

render(){
  return(
    <div>
      <h1></h1>
    </div>
  )
}
}

