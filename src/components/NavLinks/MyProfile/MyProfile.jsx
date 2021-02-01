import React from 'react'
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";

const MyProfile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer dispatch={props.dispatch}/>
        </div>
    )
}

export default MyProfile