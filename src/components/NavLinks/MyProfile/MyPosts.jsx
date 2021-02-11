import React from 'react'
import s from './MyProfile.module.css'

const MyPosts = props => {
    const onAddPost = () => {
        props.addPost()

    }

    const onPostChange = (e) => {
        props.updatePostMessage(e.target.value)
    }

    return (
        <div className={s.myPosts}>
            <div className={s.sendInfo}>
                <input type="text"
                       value={props.postText}
                       onChange={onPostChange}/>
                <button onClick={onAddPost}
                        disabled={props.postText ? false: true}>{'+'}</button>
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}

const Post = props => {
    return (
        <ul>{props.posts.map(post => {
            return <li className={s.postContent} key={post.id}>
                <span>{post.message}</span>
                <button >{post.likes}</button>
            </li>
        })}</ul>
    )
}

export default MyPosts