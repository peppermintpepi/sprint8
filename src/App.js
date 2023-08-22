import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShipsList from "./components/ShipList/ShipList";    // Exercici 1
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/ships' component={ShipsList} />
      </Switch>
    </Router>
  );
}

export default App;
