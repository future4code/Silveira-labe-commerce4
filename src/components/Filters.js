import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-evenly;
`

const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 500px; 
    width: 300px; 
    padding: 10px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`



export default class Filters extends React.Component {
  render() {
    return (
      <Container>
        <FiltersContainer>
          <h3>Filtros</h3>
          <InputContainer>
            Valor Mínimo
            <input
              type="number"
              value={this.props.minFilter}
              onChange={this.props.onChangeMinFilter}
            />
          </InputContainer>
          <InputContainer>
            Valor Máximo
            <input
              type="number"
              value={this.props.maxFilter}
              onChange={this.props.onChangeMaxFilter}
            />
          </InputContainer>
          <InputContainer>
            Busca por Nome
            <input
              type="text"
              value={this.props.nameFilter}
              onChange={this.props.onChangeMaxFilter}
            />
          </InputContainer>
      </FiltersContainer>
      </Container>
    )
  }
}
