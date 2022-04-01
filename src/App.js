import React from 'react';
import Filters from './components/Filters';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import Card from './components/Card';
import joblist from './data/jobs.json';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  
`

const Main = styled.div `
  display: flex;
  justify-content: space-evenly;
`
const HeaderProdutos = styled.div`
  justify-content: center;
`
const CorpoProdutos = styled.div`
  display: flex;
  flex-direction: column;
`


export default class App extends React.Component {
  
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: "",
    jobs: joblist
  };

  onChangeMinFilter = (event) => {
      this.setState({minFilter: event.target.value})
  };

  onChangeMaxFilter = (event) => {
      this.setState({maxFilter: event.target.value})
  };

  onChangeNameFilter = (event) => {
      this.setState({nameFilter: event.target.value})
  };

  render() {
    return(
    <Container>
      <Filters 
          minFilter= {this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}>
        </Filters>
      <Main>
        <CorpoProdutos>
          <HeaderProdutos>
          </HeaderProdutos>
          <Produtos>
            {this.state.jobs
            .filter(job =>{
              return job.title.toLowerCase().includes(this.state.nameFilter.toLowerCase()) || 
                    job.description.toLowerCase().includes(this.state.nameFilter.toLowerCase())
            })
            .filter(job=>{
              return this.state.minFilter === "" || job.valor >= this.state.minFilter
            })
            .filter(job=>{
              return this.state.maxFilter === "" || job.valor <= this.state.maxFilter
            })
            .map(job => {
              return <Card key={job.id} job={job} />
            })} 
          </Produtos>
        </CorpoProdutos> 
        <Carrinho>

        </Carrinho>
        
      </Main>
    </Container>
    )
  }
}
