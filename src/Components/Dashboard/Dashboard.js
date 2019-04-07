import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Components
import DashboardNav from '../DashboardNav/DashboardNav';
import DashboardMessages from '../DashboardMessages/DashboardMessages';
import DashboardUsers from '../DashboardUsers/DashboardUsers';

//Styled Components
import { DashboardContainer } from './DashboardStyles';

class Dashboard extends Component {
  render() {
    console.log(this.props.user)
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

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Dashboard);