
import React from "react";
import { Switch, Route } from "react-router-dom";
import Clientes from "../pages/Clientes";
import ClientesFieis from "../pages/ClientesFieis";
import Home from "../pages/Home";
import recomendaVinho from "../pages/RecomendaVinho";
import MaiorCliente from "../pages/MaiorCliente";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recomendaVinho"  component={recomendaVinho} />
      <Route path="/Clientes"  component={Clientes} />
      <Route path="/bestClients" component={ClientesFieis} />
      <Route path="/MaiorCliente" component={MaiorCliente} />
    </Switch>
  );
}