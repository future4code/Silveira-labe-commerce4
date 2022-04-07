import React from 'react';
import styled from 'styled-components';
import { Rocket } from '@styled-icons/ionicons-sharp/Rocket';


const FiltersContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  margin: 20px;
  background-color: #D8BFD8;
  border-radius: 6px;
  border: none;
  height: 30px;
  outline: 0;
`

const H1 = styled.h1`
  color: #9400D3;
`

const H3 = styled.h3`
  color: #9400D3;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
`


export default class Filters extends React.Component {
  render() {
    return (
        <FiltersContainer>
          <Div>
            <Rocket size={30} color="#9400D3" />
            <H1>SkyUniverse</H1>
          </Div>
          <InputContainer>
          <H3>Busque por:</H3>
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
