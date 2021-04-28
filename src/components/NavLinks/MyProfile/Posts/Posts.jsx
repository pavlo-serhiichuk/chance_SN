import React from 'react'
import s from '../Profile.module.css'
import PostsForm from "./PostsForm";

const Post = props => {
    return (
        <ul>{props.posts.map(post => {
            return <li className={s.postContent} key={post.id}>
                <span>{post.message}</span>
                <button>{post.likes}</button>
            </li>
        })}</ul>
    )
}

const Posts = props => {
    const onAddPost = (values) => {
       props.addPost(values.postMessage)
    }

    return (
        <div className={s.myPosts}>
            <PostsForm onSubmit={onAddPost}/>
            <Post posts={props.posts}/>
        </div>
    )
}

export default Posts