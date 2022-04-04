import styled from 'styled-components';
import App from '../App';

const Div = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 46%;
  margin: 0 30%;
  display: grid;
  grid-template: column;
  grid-template-rows: 96.5fr 3.5fr;`

const Button = styled.button`
align-self: center;
margin-top: 4px;
`



function ProdutoCard (props) {
    //  
        return <div>
        
         
          <Button onClick={""}>Adicionar ao carrinho</Button>
       
         </div>
    
}

export default ProdutoCard

