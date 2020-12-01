import React from 'react'
import s from './MyProfile.module.css'
import SendInfo from "../../common/SendInfo";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const MyProfile = (props) => {
    return (
        <div>
                <ProfileInfo/>
                <MyPosts posts={props.profileInfo.posts}/>
        </div>
    )
}

export default MyProfile