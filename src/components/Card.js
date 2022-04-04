import React from 'react';
import styled from 'styled-components';
import {Coins} from '@styled-icons/fa-solid/Coins';
import {Planet} from '@styled-icons/ionicons-sharp/Planet';
import {CalendarCheckFill} from '@styled-icons/bootstrap/CalendarCheckFill';


const CardContainer = styled.div`
    background-color: #f5f5f5;
    color: black;
    margin: 5px;
    padding: 0 15px;
    border-radius: 5px;
    width: 250px;
    align-items: center;
`
const CardContent = styled.p`
    padding: 0;   
    color: #363636;
    align-items: center;
`
const IMG = styled.img`
    width: 18.35vw;
    height: 11.6vw;
    margin-bottom: 10px;
    border-radius: 5px;
`

const Button = styled.button`
    background-color: #D8BFD8;
    height: 30px;
    border-radius: 50px;
    border: none;
    outline: 0;
    color: #9400D3;
`
const H2 =styled.h2`
    margin: 0px;
`
const Div = styled.p`
    margin-top: 5px;
    margin-bottom: 0px;
`




function Card(props) {
    return(
        <CardContainer>

            <CardContent>
                <IMG src= {props.job.foto} alt='marte' /> 
                <H2> <Planet size={30} color='#9400D3'/> {props.job.title} </H2>
            </CardContent>

            <CardContent>
                {props.job.description}
            </CardContent>
            
            <CardContent>
                <Div>
                <CalendarCheckFill size={16} color='#9400D3'/> Duração: {props.job.duracao} dias.
                </Div>
                <Div>
                <Coins size={16} color='#9400D3'/> Preço: R${props.job.valor}
                </Div>  
            </CardContent>

        </CardContainer>
    ) 
}

export default Card