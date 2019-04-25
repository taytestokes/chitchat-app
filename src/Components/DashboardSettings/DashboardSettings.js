import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Styled Components
import { SettingsContainer, ProfileContainer, ProfileHeader } from './DashboardSettingsStyles';

class DashboardSettings extends Component {
    render() {
    console.log(this.props)
        return (
            <SettingsContainer>
                <ProfileContainer>
                    <ProfileHeader>
                        <h1>User Settings</h1>
                        <span>
                            <FontAwesomeIcon icon="pencil-alt"/>
                        </span>
                    </ProfileHeader>
                    
                </ProfileContainer>
            </SettingsContainer>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DashboardSettings);