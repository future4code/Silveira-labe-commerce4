import React from 'react'
import styled from 'styled-components'


const Titulo = styled.div`
    margin: 20px;
    border: 1px solid black;
    width: 97vw;
    text-align: center;

`
export default class Header extends React.Component {
  render() {
    return (
        <Titulo>
          <h1>Loja</h1>
        </Titulo>
    )
  }
}
