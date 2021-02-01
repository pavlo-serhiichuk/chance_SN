import React from 'react'
import {addPostAC, updatePostMessageAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Provider";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage
                const addPost = () => {
                    store.dispatch(addPostAC())
                    store.dispatch(updatePostMessageAC(''))}

                const updatePostMessage = (text) => {
                    store.dispatch(updatePostMessageAC(text))}

                return <MyPosts posts={state.posts}
                                postText={state.postText}
                                updatePostMessage={updatePostMessage}
                                addPost={addPost}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer