import React, { useEffect, useState } from 'react'
import api from '../Services/Api';
import './Home.css'; 

function MaiorCliente() {
    const [maiorCliente, setMaiorCliente] = useState({
        nome: "0",
        valorTotal: " ",
    }); 

    useEffect(() => {
      api.get('/bestClient').then((response)=> {
        setMaiorCliente(response.data)
      })
    }, [])

    return (
        <div className="container1">
            
            <h1>
                E o melhor cliente de 2016 é:
            </h1>

            <>
                  <p className="nome">{maiorCliente.nome} </p>
                  <p>
                    Valor total gasto:
                    {" " +
                      maiorCliente.valorTotal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </p>
            </>

        </div>
    );
}

export default MaiorCliente;
