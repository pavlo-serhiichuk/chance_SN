import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class HeaderContainer extends React.PureComponent {
    render() {
        // debugger
        return (
            <Header {...this.props}/>
        )
    }
}

 const mstp = (state) => ({
     isAuth: state.auth.isAuth,
     login: state.auth.login
 })

export default compose(
    withRouter,
    connect(mstp, {getAuthUserData, logout})
)(HeaderContainer)