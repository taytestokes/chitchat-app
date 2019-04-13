import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

//Components
import DashboardNav from '../DashboardNav/DashboardNav';
import DashboardMessages from '../DashboardMessages/DashboardMessages';
import DashboardUsers from '../DashboardUsers/DashboardUsers';

//Styled Components
import { DashboardContainer } from './DashboardStyles';

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <DashboardNav />
        <Switch>
          <Route path="/dashboard/messages" component={DashboardMessages} />
          <Route path="/dashboard/users" component={DashboardUsers} />
        </Switch>
      </DashboardContainer>
    )
  };
};

export default Dashboard;