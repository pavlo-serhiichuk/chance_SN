import React from 'react'
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css';
import {connect} from "react-redux";
import {Input} from "../../../common/FormsControles/FormsControls";
import {maxLength, required} from "../../../common/FormsControles/validators";

const maxLength25 = maxLength(25)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
         <pre>
             <label htmlFor="firstName">First Name: </label>
             <Field component={Input} validate={[required, maxLength25]}
                    name={'login'} placeholder={'Login'}/>
         </pre>
         <pre>
             <label htmlFor="firstName">Password:   </label>
             <Field component={Input} validate={[required, maxLength25]}
                    name={'password'} placeholder={'Password'}/>
         </pre>
         <pre>
             <Field component={Input} validate={[required, maxLength25]}
                    name={'rememberMe'} type="checkbox"/> Remember Me
         </pre>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);  // обертка над LoginForm

const Login =  () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect()(Login)

// у любой формы есть handleSubmit.
// Когда испол. redux-form то навешиваем на форму обработчик из прорсов