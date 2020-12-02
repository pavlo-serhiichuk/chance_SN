import React from 'react'
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const MyProfile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profileInfo.posts}
                     postText={props.profileInfo.postText}
                     addPost={props.addPost}
                    updatePostText={props.updatePostText}/>
        </div>
    )
}

export default MyProfile