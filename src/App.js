import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShipsList from "./components/ShipList/ShipList";    // Exercici 1
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/ships' component={ShipsList} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
