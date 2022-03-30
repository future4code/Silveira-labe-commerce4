import { render } from '@testing-library/react';
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import App from '../App';

export default class Produto extends React.Component {
    render() {
const filtroDaLista = this.getFilterDaLista()
return <ContainerDoProduto>
    <CabecalhoProduto>
        <p>Quantidade de produtos: {filtroDaLista.length}</p>
    <label>
        Ordenação: 
        <select value={this.state.sort}>
            <option value={'Crescente'}>Crescente</option>
            <option value={'Decrescente'}>Decrescente</option>
        </select>
    </label>
   </CabecalhoProduto>
    
    <FiltroBotao>
        {filtroDaLista.map(() =>{
            return <produtoCard
            produto={{produto}}
        }

    </FiltroBotao>
    </ContainerDoProduto>
    }
}        