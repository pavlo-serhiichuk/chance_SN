import React from 'react'
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const MyProfile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts}

                     dispatch={props.dispatch}
                     postText={props.state.profilePage.postText}
            />
        </div>
    )
}

export default MyProfile