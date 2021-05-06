import React from 'react'
import s from './Login.module.css';
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {login} from "../../../redux/auth_reducer";

const Login =  ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth) return <Redirect to={'/profile'} />

    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mstp = (state) => ({
 isAuth: state.auth.isAuth
})

export default connect(mstp, {login})(Login)

// у любой формы есть handleSubmit.
// Когда испол. redux-form то навешиваем на форму обработчик из прорсов