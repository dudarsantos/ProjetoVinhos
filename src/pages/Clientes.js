import React, {useState, useEffect} from 'react';
import api from '../Services/Api';
import './Clientes.css';


function Clientes() {
  const [clientes, setClientes] = useState([]); 

  useEffect(() => {
    api.get('/clientsOrderedByPurchase').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 
<div>
    <h1>Clientes com maior valor em compras:</h1>

    <table>
      <thead>
        <th>Id |</th>
        <th>Nome |</th>
        <th>CPF |</th>
        <th>Total em Compras</th>
      </thead>
      <tbody>

        {clientes.map((item) => {
          return(
          <tr>
          <td>{item.id}</td> 
          <td>{item.nome}</td> 
          <td>{item.cpf}</td> 
          <td>{item.valorTotal}</td> 
          </tr>)
        })}
      </tbody>
    </table>
  </div>
  );
}

export default Clientes;
