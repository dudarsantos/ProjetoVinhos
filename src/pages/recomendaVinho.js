import React, {useState, useEffect} from 'react';
import api from '../Services/Api';
import './RecomendaVinho.css';

function RecomendaVinho() {
    const [clients, setClients] = useState([]);
    const [wineRecommended, setWineRecommended] = useState(" ");
    const [client, setClient] = useState([]);
        
        useEffect(() => {
                api.get('/clients').then((response)=> {
                setClients(response.data);
            });
        }, []); 

        const recommendWine = (cliente) => {
            api.get(`/recommendWine/${cliente}`).then((response) => {
                setWineRecommended(response.data);
            });
        };


            return (
                <div className="containerX">
                    <h1>
                        Clientes com maior valor em compras:
                    </h1>

                    <div>


                        <h2>Selecione um cliente:</h2>

                        <select
                            onChange={(event) => {
                            let cpf = event.target.value.replace(/-|\.|/gi,"");
                            recommendWine(cpf);
                        }}
                        >
                        <option></option>
                        {clients.map((item) => (
                            <option key={item.map} value={item.cpf}>
                                {item.nome}
                            </option>
                        ))}
                        </select>

                        <table>
                        <thead>
                            <th>Produto:</th> {wineRecommended && wineRecommended.produto}
                            <th>Variedade:</th> {wineRecommended && wineRecommended.variedade}
                            <th>País:</th> {wineRecommended && wineRecommended.pais}
                            <th>Categoria:</th> {wineRecommended && wineRecommended.categoria}
                            <th>Safra:</th> {wineRecommended && wineRecommended.safra}
                        </thead>
                        </table>

                    </div>
                </div>

            
    );
}

export default RecomendaVinho;
