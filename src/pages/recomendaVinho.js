import React, {useState, useEffect} from 'react';
import api from '../Services/Api';

function RecomendaVinho() {
    const [recomendaVinho, setRecomendaVinho] = useState([]);

            useEffect(() => {
                api.get('/recommendWine/:client').then((response)=> {
                setRecomendaVinho(response)
            })}, []);


            return (
                <div>
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

                {recomendaVinho.map((item) => {
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

export default RecomendaVinho;
