import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from '../Pages/Home';

function Index() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Index
