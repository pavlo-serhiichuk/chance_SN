import React from 'react'
import s from './MyProfile.module.css'
import SendInfo from "../../common/SendInfo";
import ProfileInfo from "./ProfileInfo";

const posts = [
    {message: 'Glad to see everyone', likes: 0},
    {message: 'Glad to see everyone', likes: 3},
    {message: 'Glad to see everyone', likes: 5},
]

const MyPosts = props => {
    return (
        <div className={s.myPosts}>
            <SendInfo/>
            <Post posts={props.posts}/>
        </div>
    )
}

const Post = props => {
    return (
        <ul>{props.posts.map(post => {
            return <li className={s.postContent}>
                <span>{post.message}</span>
                <button>{post.likes}</button>
            </li>
        })}</ul>
    )
}

export default MyPosts