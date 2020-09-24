import React, {useState, useEffect} from 'react';
import api from '../Services/Api';


function ClientesFieis() {
  const [clientesFieis, setClientesFieis] = useState([]); 

  useEffect(() => {
    api.get('/bestClients').then((response)=> {
      setClientesFieis(response.data)
    })
  }, [])

  return ( 
<div>
    <h1>Clientes</h1>
    <span>
        Clientes com maior valor em compras:
    </span>

    <table>
      <thead>
        <th>Id |</th>
        <th>Nome |</th>
        <th>CPF |</th>
        <th>Total em Compras</th>
      </thead>
      <tbody>

        {clientesFieis.map((item) => {
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

export default ClientesFieis;