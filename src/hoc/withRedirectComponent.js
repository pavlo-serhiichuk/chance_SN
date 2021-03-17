import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
        if (!this.props.isAuth) {
            return <Redirect to={'login'} />
        }
        return <Component {...this.props} />
    }
    }

    let mspt = (state) => ({
        isAuth: state.auth.isAuth
    })

    let withAuthRedirectComponent = connect(mspt)(RedirectComponent)

    return withAuthRedirectComponent
}

export default withAuthRedirect