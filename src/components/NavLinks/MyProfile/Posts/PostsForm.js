import React from 'react';
import s from "../Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {required, maxLength} from "../../../../common/FormsControles/validators";
import {Textarea} from "../../../../common/FormsControles/FormsControls";

const maxLength5 = maxLength(5)

const PostsForm = props => {
    return (
        <form className={s.postInfo} onSubmit={props.handleSubmit}>
            <Field name={'postMessage'}
                   validate={[required, maxLength5]}
                   component={Textarea}
                   placeholder={'Share your thoughts...'}/>
            <button className={s.postButton}>{'>'}</button>
        </form>
    );
};

const PostsRedux = reduxForm({form: 'posts'})(PostsForm)

export default PostsRedux;