import React from 'react'
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const MyProfile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profileInfo.posts}
                     postText={props.profileInfo.postText}
                     addPostAC={props.addPostAC}
                     updateMessageAC={props.updateMessageAC}/>
        </div>
    )
}

export default MyProfile