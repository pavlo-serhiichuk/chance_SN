import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withRedirectComponent";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         savePhoto={this.props.savePhoto}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mstp = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose(
    withRouter,
    connect(mstp, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withAuthRedirect
)(ProfileContainer)
