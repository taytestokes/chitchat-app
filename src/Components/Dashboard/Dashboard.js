import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//Components
import DashboardNav from '../DashboardNav/DashboardNav';
import DashboardMessages from '../DashboardMessages/DashboardMessages';

//Styled Components
import { DashboardContainer } from './DashboardStyles';

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <DashboardNav />
        <Switch>
          <Route path="/dashboard/messages" component={DashboardMessages} />
        </Switch>
      </DashboardContainer>
    )
  };
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Dashboard);