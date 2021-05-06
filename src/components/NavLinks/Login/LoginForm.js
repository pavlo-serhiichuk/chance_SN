import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControles/FormsControls";
import {maxLength, required} from "../../../common/FormsControles/validators";
import s from './Login.module.css'
const maxLength35 = maxLength(35)
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
         <pre>
             <label htmlFor="firstName">First Name: </label>
             <Field component={Input} validate={[required, maxLength35]}
                    name={'email'} placeholder={'Email'}/>
         </pre>
            <pre>
             <label htmlFor="firstName">Password:   </label>
             <Field component={Input} validate={[required, maxLength35]}
                    name={'password'} placeholder={'Password'}/>
         </pre>
            <pre>
             <Field component={Input} validate={[required, maxLength35]}
                    name={'rememberMe'} type="checkbox"/> Remember Me
         </pre>
            {error && <div className={s.summaryError}>{error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);  // обертка над LoginForm

export default LoginReduxForm