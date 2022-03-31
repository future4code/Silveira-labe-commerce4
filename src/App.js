import React from 'react';
import styled from "styled-components";
import ProdutoCard from './components/ProdutoCard';
import Produto from './components/Produto';
import lablist from './lab.json'


export default class App extends React.Component {
  state = {
    homePage: [{
    valorMinimo: "",
    valorMaximo: "", 
    BuscaPorNome: "",
    ordenacao: "Crescente",
    
    }],
    carrinho: [{}],
    labs: lablist
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
        <div>
          <Produto></Produto>
        </div>
        <div>
          <p></p>
          <ProdutoCard foto={''} nome={'Universo'} preco={''} />

          <ProdutoCard foto={''} nome={'Universo'} preco={''} />

          <ProdutoCard foto={''} nome={'Universo'} preco={''} />


        </div>
      </div>
      
      
    )
  }
}

