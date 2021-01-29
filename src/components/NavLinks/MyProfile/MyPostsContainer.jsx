import React from 'react'
import {addPostAC, updatePostMessageAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(updatePostMessageAC(''))

    }

    const updatePostMessage = (text) => {
        props.dispatch(updatePostMessageAC(text))
    }

    return (
        <MyPosts posts={props.posts}
                 postText={props.postText}
                 updatePostMessage={updatePostMessage}
                 addPost={addPost}/>
    )
}

export default MyPostsContainer