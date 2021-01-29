import React from 'react'
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";

const MyProfile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={props.state.profilePage.posts}
                              dispatch={props.dispatch}
                              postText={props.state.profilePage.postText}
            />
        </div>
    )
}

export default MyProfile