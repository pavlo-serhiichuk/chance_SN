import React from 'react'
import s from './Profile.module.css'
import avatar from '../../../images/ava.png'
import BigPreloader from "../../../common/Preloader";

const ProfileInfo = (props) => {
    console.log(props)
    if(!props.profile) {
        return <BigPreloader />
    }

    const Contacts = () => {
        return <div className={s.contacts}>
            {Object.entries(props.profile.contacts).map(contact => <div key={5}>{`${contact[0]}: ${contact[1]}`}</div>)}
        </div>
    }

    return (
        <div className={s.profileInfo}>
                <img className={s.avatar} src={props.profile.photos.large || avatar} alt=""/>
            <div className={s.info}>
                <div>
                    <span className={s.fullName}>{props.profile.fullName}</span>
                </div>
                <div>
                    <span>{`About Me: ${props.profile.aboutMe}`}</span>
                </div>
                    <Contacts />
            </div>
        </div>
    )
}

export default ProfileInfo