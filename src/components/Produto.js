import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  padding: 16px;
  gap: 30px 30px;
  margin-top: 5px;
  margin-right: 50px;
  margin-left: 300px;
`


function Produto (){
    return (
        <Div>
            <p>Quantidade de produtos:</p>
            <label>
                Ordenação:
                <select>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </select>
            </label>
        </Div>
    )
}
export default Produto


    
   