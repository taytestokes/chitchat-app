import React, { Component } from 'react'
import { connect } from 'react-redux';

//Styled Components
import { SettingsContainer } from './DashboardSettingsStyles';

class DashboardSettings extends Component {
    render() {
        return (
            <SettingsContainer>

            </SettingsContainer>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DashboardSettings);