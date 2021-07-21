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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="min-w-screen min-h-screen bg-blue-200 flex justify-center items-center md:space-x-10 space-y-5 md:space-y-0 flex-col md:flex-row">
              <Link className="px-6 font-bold text-white py-2 rounded-lg bg-green-800 hover:bg-green-600" to="/login">
                Login
              </Link>
              <Link className="px-6 font-bold text-white py-2 rounded-lg bg-green-800 hover:bg-green-600" to="/register">
                Register
              </Link>
              <Link className="px-6 font-bold text-white py-2 rounded-lg bg-green-800 hover:bg-green-600" to="/dashboard">
                Dashboard
              </Link>
          </div>
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
        <Route path="/gamasurf">
          <GamasurfRegister />
        </Route> 
        <Route path="*">
          <h1 className="text-7xl">404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
