import React from 'react'
import styled from 'styled-components';


const FiltersContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #9400D3;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  margin: 20px;
  background-color: #A020F0;
  color: white;
`

const H2 = styled.h2 `
  margin-left: 20px;
  color: white;
`



export default class Filters extends React.Component {
  render() {
    return (
        <FiltersContainer>
          <H2> SkyUniverse</H2>
          <InputContainer>
          <h3>Busque por:</h3>
            <Input
              type="text"
              placeholder='Nome'
              value={this.props.nameFilter}
              onChange={this.props.onChangeNameFilter}
            />
            <Input
              type="number"
              placeholder='Valor Mínimo'
              value={this.props.minFilter}
              onChange={this.props.onChangeMinFilter}
            />
            <Input
              type="number"
              placeholder='Valor Máximo'
              value={this.props.maxFilter}
              onChange={this.props.onChangeMaxFilter}
            />
          </InputContainer>
      </FiltersContainer>
    )
  }
}
