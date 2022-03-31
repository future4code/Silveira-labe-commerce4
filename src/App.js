import React from 'react';
import Filters from './components/Filters';
import './App.css'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-evenly;
`
export default class App extends React.Component {
  
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: ""
  };

  const = 

  onChangeMinFilter = (event) => {
      this.setState({minFilter: event.target.value})
  };

  onChangeMaxFilter = (event) => {
      this.setState({maxFilter: event.target.value})
  };

  onChangeNameFilter = (event) => {
      this.setState({nameFilter: event.target.value})
  };

  render(){
    return(
    <Container>
      <Filters>
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}
      </Filters>

    </Container>
    )
  }
}
