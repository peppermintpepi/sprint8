import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ShipsList from "./components/ShipList/ShipList";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
    const initIsLoggedIn = localStorage.getItem('isLoggedIn') || 'false';
    const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn === 'true');

    useEffect(() => {
        localStorage.setItem('isLoggedIn', initIsLoggedIn);
    }, [initIsLoggedIn]);    
  
      return (
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/login'>
              {isLoggedIn ? <Redirect to="/ships" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
            </Route>
            <Route path='/signup' component={SignUp} />
            <Route path='/ships'>
              {isLoggedIn ? <ShipsList /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Router>
      );
  }
  
export default App;
