import React from 'react';

//react-router-dom packages
import { Switch, Route } from 'react-router-dom';

//Components
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';


export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp}/>
    </Switch>
)