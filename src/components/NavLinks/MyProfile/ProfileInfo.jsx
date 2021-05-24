import React, {useState} from 'react'
import s from './Profile.module.css'
import avatar from '../../../images/ava.png'
import BigPreloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const Contact = ({contactTitle, contactValue}) => {
    if (!contactValue) return null
    return (
        <div>
            <strong>{contactTitle}</strong> : {contactValue}
        </div>
    )
}

const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <BigPreloader/>
    }

    const mainPhotoSelected = e => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfo}>
            <img className={s.avatar} src={profile.photos.large || avatar} alt=""/>
            {isOwner && <input type='file' onChange={mainPhotoSelected}/>}
            <div className={s.info}>
                <div>
                    <ProfileStatusWithHooks status={status}
                                            updateStatus={updateStatus}/>
                </div>
                {editMode
                ? <ProfileDataForm profile={profile} goToSave={() => setEditMode(false)}/>
                : <ProfileData profile={profile} goToEdit={() => setEditMode(true)}/>
                }

            </div>
        </div>
    )
}

export default ProfileInfo