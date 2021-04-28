import React from 'react'
import s from './Login.module.css';
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {login} from "../../../redux/auth_reducer";

const Login =  (props) => {
    const onSubmit = (formData) => {
        console.log(formData.email, formData.password, formData.rememberMe)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) return <Redirect to={'/profile'} />

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