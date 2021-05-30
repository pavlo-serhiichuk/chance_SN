import React from 'react'
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <PostsContainer dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile