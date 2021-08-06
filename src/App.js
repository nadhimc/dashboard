import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import GamasurfRegister from './Pages/GamasurfRegister';
import Logout from './Pages/Logout';
import Admin from './Pages/Admin';
import SentRegister from './Pages/SentRegister';
import NasecRegister from './Pages/NasecRegister';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/dashboard/:page" children={<Dashboard />} />  
        <Route path="/dashboard" children={<Dashboard />} /> 
        <Route path="/admin/:page" children={<Admin />} />  
        <Route path="/admin" children={<Admin />} /> 
        <Route path="/nasec">
          <NasecRegister />
        </Route>
        <Route path="/gamasurf">
          <GamasurfRegister />
        </Route>
        <Route path="/sent">
          <SentRegister />
        </Route>
        <Route path="*">
          <h1 className="text-7xl">404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
