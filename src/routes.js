import React from 'react';

//react-router-dom packages
import { Switch, Route } from 'react-router-dom';

//Components
import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';


export default (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login}/>
    </Switch>
)