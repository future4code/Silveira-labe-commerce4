import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  justify-content: center;
  background-color: #f5f5f5;
  height: 100px;
  width: 200px;
  border-radius: 5px;
  align-items: center;
  margin-top:  ;
  color: #363636;
`

const Select = styled.select`
	background-color: #f5f5f5;
	outline: 0;
`

const Div = styled.div`
 margin: 20px ;
 justify-content: center;
 align-items: center;
`

export default class HeaderProdutos extends React.Component {
  render() {
	return (
	  <Container>
		  <Div>
			<div>
				<p>Viagens Disponíveis: {this.props.disponiveis}</p>
			</div>
		  	<label for="sort">Ordenação:</label>
				<Select 
				name="sort"
				value={this.props.sortingParameter}
				onChange ={this.props.updateSortingParameter} >
					<option value= "price">Preço</option>
					<option value= "days">Duração</option>
				</Select>
		  </Div>
	  </Container>
	)
  }
}


