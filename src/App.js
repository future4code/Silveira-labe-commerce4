import React from 'react';
import Filters from './components/Filters';
import HeaderProdutos from './components/HeaderProdutos';
import Produtos from './components/Produtos';
import Card from './components/Card';
import joblist from './data/jobs.json';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://i.pinimg.com/originals/22/58/24/2258249e9b4084cda4fdc9c798818d19.jpg');
  background-size: cover ;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CorpoProdutos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

//------------------------------------------//

export default class App extends React.Component {
  
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: "",
    jobs: joblist,
    sortingParameter: "title"
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

  updateSortingParameter = (event) => {
    this.setState({sortingParameter: event.target.value})
  };


  render() {
    return(
    <Container>
      <Filters 
          minFilter= {this.state.minFilter}
          maxFilter= {this.state.maxFilter}
          nameFilter= {this.state.nameFilter}
          onChangeMinFilter= {this.onChangeMinFilter}
          onChangeMaxFilter= {this.onChangeMaxFilter}
          onChangeNameFilter= {this.onChangeNameFilter}>
        </Filters>
      <Main>
        <HeaderProdutos
          disponiveis= {this.state.jobs
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
            .sort((currentJob,nextJob) =>{
              switch (this.state.sortingParameter){
                case "days":
                  return currentJob.duracao - nextJob.duracao
                default:
                  return currentJob.valor - nextJob.valor
              }
            }) 
            .length}
          sortingParameter={this.state.sortingParameter}
          updateSortingParameter= {this.updateSortingParameter}
          />
        <CorpoProdutos>
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
            .sort((currentJob,nextJob) =>{
              switch (this.state.sortingParameter){
                case "days":
                  return currentJob.duracao - nextJob.duracao
                default:
                  return currentJob.valor - nextJob.valor
              }
            }) 
            .map(job => {
              return <Card  
              onAddProductToCard={this.onAddProductToCard} 
              key={job.id} 
              job={job} />
            })
            }
          </Produtos>
        </CorpoProdutos> 
      </Main>
    </Container>
    )
  }
}
