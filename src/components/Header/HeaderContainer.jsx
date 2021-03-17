import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getAuthUserData()
    }

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

export default connect(mstp, {getAuthUserData})(HeaderContainer)