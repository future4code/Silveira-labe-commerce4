import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div `
    background-color: #A020F0;
    margin: 5px;
    padding: 0 15px;
    border-radius: 5px;
    width: 250px;
`
const CardContent = styled.p`
    padding: 15px 0;    
`

function Card(props) {
    return(
        <CardContainer>
            <h2 > {props.job.title} </h2>
            <CardContent>
                Destino:{props.job.description}
            </CardContent>
            <CardContent>
                Preço:{props.job.valor}
            </CardContent>
        </CardContainer>
    ) 
}

export default Card