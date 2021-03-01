import React from 'react'
import s from './Header.module.css'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends React.PureComponent {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                    debugger
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

 const mstp = (state) => ({
     isAuth: state.auth.isAuth,
     login: state.auth.login
 })

export default connect(mstp, {setAuthUserData})(HeaderContainer)