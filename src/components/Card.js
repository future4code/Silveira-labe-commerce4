import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: lavender;
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
                {props.job.description}
            </CardContent>
        </CardContainer>
    ) 
}

export default Card