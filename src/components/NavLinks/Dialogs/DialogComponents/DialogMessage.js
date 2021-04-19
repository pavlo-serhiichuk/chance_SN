import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../common/FormsControles/validators";
import {Textarea} from "../../../../common/FormsControles/FormsControls";
import s from '../Dialogs.module.css'
const maxLength25 = maxLength(25)

const DialogMessage = (props) => {

    return (
        <form className={s.dialogForm} onSubmit={props.handleSubmit}>
            <Field
                   component={Textarea}
                   name={'dialog'}
                   validate={[required, maxLength25]}
                   placeholder={'Write your opinion...'}/>
            <button className={s.sendButton}>Send</button>
        </form>
    );
};

let DialogMessageRedux = reduxForm({form: 'dialog'})(DialogMessage)

export default DialogMessageRedux;