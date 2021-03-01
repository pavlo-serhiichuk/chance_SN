import React from 'react'
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./PostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile