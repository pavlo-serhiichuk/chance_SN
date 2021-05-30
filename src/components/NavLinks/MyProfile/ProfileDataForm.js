import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControles/FormsControls";
import s from "./Profile.module.css";

const ProfileDataForm = ({goToSave, handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button onClick={goToSave}>Save</button>

            <div className={s.fullName}>
                <label htmlFor="fullName">Change name: </label>
                <Field component={Input}
                       validate={[]}
                       name={'fullName'}
                       placeholder={'Change name...'}/>
            </div>
            <div className={s.userInfo}>
                <label htmlFor="aboutMe">
                    <b>About Me: </b>
                </label>
                <Field component={Input} validate={[]}
                       name={'aboutMe'} placeholder={'About me...'}/>
            </div>
            <div className={s.userInfo}>
                <label htmlFor="lookingForAJobDescription">
                    <b>Professional skills:</b>
                </label>
                <Field component={Input} validate={[]}
                       name={'lookingForAJobDescription'}
                       placeholder={'Skills...'}/>
            </div>

            {Object.entries(profile.contacts).map(contact => {
                return <div key={contact[0]} className={s.userInfo}>
                    <label htmlFor={`contacts.${contact[0]}`}>
                        <b>{contact[0]}</b>: </label>
                    <Field component={Input} validate={[]}
                           name={`contacts.${contact[0]}`} placeholder={'Link...'} />
                </div>
            })}
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'profile-data'})(ProfileDataForm)

// let FinishProfileDataForm = connect(state => ({initialValues: state.profile}))(ProfileDataReduxForm)

export default ProfileDataReduxForm;