import React from 'react';
import s from "./Profile.module.css";

const ProfileData = ({profile, goToEdit}) => {
    return (
        <div>
            <button onClick={goToEdit}>Edit</button>
            <div>
                <span className={s.fullName}>{profile.fullName}</span>
            </div>
            <span><b>About Me:</b> {profile.aboutMe}</span>
            <div>
                <b>Professional skills: </b> {profile.lookingForAJobDescription}
            </div>
            {Object.entries(profile.contacts).map(contact => {

                if (!contact[1]) return null
                return <div key={contact[0]}>
                        <b>{contact[0]}:</b> {contact[1]}
                    </div>
            })}
        </div>
    );
};

export default ProfileData;