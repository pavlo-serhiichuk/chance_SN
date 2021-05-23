import React from 'react'
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <PostsContainer dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile