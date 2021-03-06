import React, {useState, useEffect} from 'react';
import api from '../Services/Api';
import './Home.css'; 

function Clientes() {
  const [clientes, setClientes] = useState([]); 

  useEffect(() => {
    api.get('/clientsOrderedByPurchase').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 
<div className="container3">
    <h1>Clientes com maior valor em compras:</h1>

    <table>
      <thead>
        <th>Nome </th>
        <th>CPF </th>
        <th>Total em Compras</th>
      </thead>
      <tbody>

        {clientes.map((item) => {
          return(
          <tr>
          <td>{item.nome}</td> 
          <td>{item.cpf}</td> 
          <td>{item.valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
          })}
          </td>
          </tr>)
        })}
      </tbody>
    </table>

  </div>
  );
}

export default Clientes;
