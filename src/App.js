import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './view/Login/Login.js';
import Home from './view/Home/Home.js';
import './App.scss';



function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home}/>
    </Switch>
  );
};

export default App;