
import React from "react";
import { Switch, Route } from "react-router-dom";
import Clientes from "../pages/Clientes";
import Home from "../pages/Home";
import RecomendaVinho from "../pages/recomendaVinho";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/RecomendaVinho"  component={RecomendaVinho} />
      <Route path="/Clientes"  component={Clientes} />
    </Switch>
  );
}