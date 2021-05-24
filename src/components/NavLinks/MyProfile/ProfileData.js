import React from 'react';
import s from "./Profile.module.css";

const ProfileData = ({profile, goToEdit}) => {
    return (
        <div>
            <button onClick={goToEdit}>Edit</button>
            <div>
                <span className={s.fullName}>{profile.fullName}</span>
            </div>
            <span>About Me: {profile.aboutMe}</span>
            {Object.entries(profile.contacts).map(contact => {

                if (!contact[1]) return null

                return <div>
                        <strong>{contact[0]}</strong> : {contact[1]}
                    </div>
            })}
        </div>
    );
};

export default ProfileData;