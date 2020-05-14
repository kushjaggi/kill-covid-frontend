import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./pages/login/login";
import Signup from "./pages/signup/sign-up.js";
import Evaluation from './pages/Evaluation/Evaluation.js';
import Patient from './pages/Patient/Patient.js';
import DoctorHome from "./pages/DoctorHome/Doctor-home";
import './App.css';


function App() {
  return (
    <div>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Eval" component={Evaluation} />
          {/* <Route path="/" component={Signup} /> */}
          <Route path="/" component={Patient} />
          <Route path="/Doctor-Home" component={DoctorHome} />
        </Switch>
    </div>
  );
}

export default App;
