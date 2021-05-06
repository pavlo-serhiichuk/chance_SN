import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../../images/ava.png'
import {NavLink} from "react-router-dom";

const User = ({user, unFollow, follow, followingInProgress}) => {
    return (
        <div className={s.userContainer} key={user.id}>
            <NavLink to={`profile/${user.id}`}>
                <img src={user.photos.small || userPhoto} alt=""/>
            </NavLink>
            <div className={s.userInfo}>
                <div>{user.name}</div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => unFollow(user.id)}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  return follow(user.id)
                              }}>Follow</button>
                }
            </div>
        </div>
    )
}

export default User