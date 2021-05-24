import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControles/FormsControls";
import s from "./Profile.module.css";

const ProfileDataForm = ({profile, goToSave}) => {
    return (
        <form>
            <button onClick={goToSave}>Save</button>

            <div className={s.fullName}>
                <label htmlFor="aboutMe">Change name: </label>
                <Field component={Input}
                       validate={[]}
                       name={'fullName'}
                       placeholder={'Change name...'}/>
            </div>
            <div className={s.userInfo}>
                <label htmlFor="aboutMe">About Me: </label>
                <Field component={Input} validate={[]}
                       name={'aboutMe'} placeholder={'About me...'}/>
            </div>
            {Object.entries(profile.contacts).map(contact => {
                return <div className={s.userInfo}>
                    <label htmlFor={contact[0]}>
                        <strong>{contact[0]}</strong>: </label>
                    <Field component={Input} validate={[]}
                           name={contact[0]} placeholder={'Link...'}/>
                </div>
            })}
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'profileData'})(ProfileDataForm)

export default ProfileDataReduxForm;