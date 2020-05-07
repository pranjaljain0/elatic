import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Pages/Home';
import Login from '../Auth/Login';
import SignUp from '../Auth/Signup';

function Index() {
    return (
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={Home} />
          </Switch>
        </div>
      </div>
    </div></Router>
    )
}

export default Index
