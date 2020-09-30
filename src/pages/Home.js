import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/wine.svg";
import './Home.css'; 

const Home = () => {
    return (

        <div className="container">
            
            <h1>Vinhos Velasquez</h1>
            <img src={logo} alt="Vinho" />

            <h2>Selecione uma das opções abaixo:</h2>

            <Link to="/Clientes"><pre>   Clientes com maior valor em <br/> compras</pre></Link>
            <br/>
            <Link to="/MaiorCliente"><pre>   Cliente com maior compra em <br/>  2016</pre></Link>
            <br/>
            <Link to="/bestClients"><pre>   Nossos clientes mais fiéis</pre></Link>
            <br/>
            <Link to="/RecomendaVinho"><pre>    Uma recomendação de vinho</pre></Link> 
        </div>
        
    );
}

export default Home;
