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
    <h1>Nossos clientes fiéis:</h1>

    <table>
      <thead>
        <th>Nome |</th>
        <th>Total em Compras</th>
      </thead>
      <tbody>

        {clientesFieis.map((item) => {
          return(
          <tr> 
          <td>{item.nome}</td> 
          <td>{item.valorTotal}</td> 
          </tr>)
        })}
      </tbody>
    </table>
  </div>
  );
}

export default ClientesFieis;