import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

//Components
import DashboardNav from '../DashboardNav/DashboardNav';
import DashboardMessages from '../DashboardMessages/DashboardMessages';
import DashboardUsers from '../DashboardUsers/DashboardUsers';

//Styled Components
import { DashboardContainer, LoadingContainer, LoadingImage } from './DashboardStyles';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    //will provide a loading animation
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        {
          this.state.loading ?
            <LoadingContainer>
              <LoadingImage />
            </LoadingContainer>
            :
            <DashboardContainer>
              <DashboardNav />
              <Switch>
                <Route path="/dashboard/messages" component={DashboardMessages} />
                <Route path="/dashboard/users" component={DashboardUsers} />
              </Switch>
            </DashboardContainer>
        }
      </div>
    )
  };
};

export default Dashboard;