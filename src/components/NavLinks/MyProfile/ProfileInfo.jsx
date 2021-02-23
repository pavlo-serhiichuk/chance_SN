import React from 'react'
import s from './Profile.module.css'
import avatar from '../../../images/ava.png'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
                <img className={s.avatar} src={avatar} alt=""/>
            <div className={s.info}>User Info</div>
        </div>
    )
}

export default ProfileInfo