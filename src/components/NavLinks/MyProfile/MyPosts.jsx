import React from 'react'
import s from './MyProfile.module.css'

const MyPosts = props => {
    // debugger
    const newPostElement = React.createRef()
    const onAddPost = () => {
        let text = newPostElement.current.value
            props.addPostAC(text)
        props.updateMessageAC('')

    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateMessageAC(text)
    }

    return (
        <div className={s.myPosts}>
            <div className={s.sendInfo}>
                <input type="text"
                       value={props.postText}
                       ref={newPostElement}
                       onChange={onPostChange}/>
                <button onClick={onAddPost}>Add Post</button>
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