import React from 'react'
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const MyProfile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profileInfo.posts}

                     dispatch={props.dispatch}
                     postText={props.profileInfo.postText}
            />
        </div>
    )
}

export default MyProfile