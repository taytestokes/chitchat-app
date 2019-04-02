import React, { Component } from 'react'
import {connect} from 'react-redux';

//Components
import DashboardNav from '../DashboardNav/DashboardNav';

class Dashboard extends Component {
  constructor(){
    super();

  }
  render() {
    console.log(this.props)
    return (
      <div>
        <DashboardNav />
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
};

export default connect(mapStateToProps)(Dashboard);