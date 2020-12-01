import React from 'react'
import s from './MyProfile.module.css'
import SendInfo from "../../common/SendInfo";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={`${s.info}`}>
            <div className={`${s.avatar}`}>Avatar</div>
            </div>
            <div className={s.info}>User Info</div>
        </div>
    )
}

export default ProfileInfo