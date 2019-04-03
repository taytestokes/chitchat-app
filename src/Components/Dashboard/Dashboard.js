import React, { Component } from 'react'
import { connect } from 'react-redux';

//Components
import DashboardNav from '../DashboardNav/DashboardNav';
import DashboardContactsContainer from '../DashboardContacts/DashboardContacts';
import DashboardMessagesContainer from '../DashboardMessages/DashboardMessages';

//Styled Components
import { DashboardContainer } from './DashboardStyles';

class Dashboard extends Component {
  constructor() {
    super();

  }
  render() {
    console.log(this.props)
    return (
      <DashboardContainer>
        <DashboardNav />
        <DashboardContactsContainer />
        <DashboardMessagesContainer />
      </DashboardContainer>
    )
  }
}

function mapStateToProps(state) {
  return state;
};

export default connect(mapStateToProps)(Dashboard);