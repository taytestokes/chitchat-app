import React from 'react';

//react-router-dom packages
import { Switch, Route } from 'react-router-dom';

//Components
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';

//Router
export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
)