import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import FormInKajak from "./pages/FormInKajak";
import FormOutKajak from "./pages/FormOutKajak";
import FormInKantine from "./pages/FormInKantine";
import FormOutKantine from "./pages/FormOutKantine";
import Logboek from "./pages/Logboek";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Registratie from "./pages/Registratie";
import SubmitCheckin from "./pages/SubmitCheckin";
import SubmitCheckoutKajak from "./pages/SubmitCheckoutKajak";
import SubmitCheckoutKantine from "./pages/SubmitCheckoutKantine";

export default function Routes() {
  return (
       <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registratie">
            <Registratie />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/logboek">
            <Logboek />
          </Route>
          <Route path="/kajak/checkin/submit">
            <SubmitCheckin />
          </Route>
          <Route path="/kajak/checkin">
            <FormInKajak />
          </Route>
          <Route path="/kajak/checkout/submit">
            <SubmitCheckoutKajak />
          </Route>
          <Route path="/kajak/checkout">
            <FormOutKajak />
          </Route>
          <Route path="/kantine/checkin/submit">
            <SubmitCheckin />
          </Route>
          <Route path="/kantine/checkin">
            <FormInKantine />
          </Route>
          <Route path="/kantine/checkout/submit">
            <SubmitCheckoutKantine />
          </Route>
          <Route path="/kantine/checkout">
            <FormOutKantine />
          </Route>          
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>          
        </Switch>
  );
}