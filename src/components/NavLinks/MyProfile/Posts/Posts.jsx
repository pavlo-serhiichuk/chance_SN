import React from 'react'
import s from '../Profile.module.css'
import PostsForm from "./PostsForm";

const Post = props => {
    return (
        <ul>{props.posts && props.posts.map(post => {
            return <li className={s.postContent} key={post.id}>
                <span>{post.message}</span>
                <button>{post.likes}</button>
            </li>
        })}</ul>
    )
}

class Posts extends React.PureComponent {

    render() {
        const onAddPost = (values) => {
            this.props.addPost(values.postMessage)
        }

        console.log('Posts rerender')
        return (
            <div className={s.myPosts}>
                <PostsForm onSubmit={onAddPost}/>
                <Post posts={this.props.posts}/>
            </div>
        )
    }
}

export default Posts