import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../../images/ava.png'
import {NavLink} from "react-router-dom";
import usersAPI from "../../../api/api";

const Users = ({users, onPageChanged, follow, unFollow, totalCount, pageSize, currentPage}) => {
    let pagesCount = Math.ceil(totalCount > 20 || 50 / pageSize)

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div className={s.usersContainer}>
            {pages.map(p => {
                return <span key={Math.random()} className={`${currentPage === p && s.selectedPage} ${s.paginator}`}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
            {users.map(user => {
                return (
                    <div className={s.userContainer} key={user.id}>
                        <NavLink to={`profile/${user.id}`}>
                            <img src={user.photos.small || userPhoto} alt=""/>
                        </NavLink>
                        <div className={s.userInfo}>
                            <div>{user.name}</div>
                            {user.followed
                                ? <button onClick={() => {
                                    usersAPI.unFollow(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    unFollow(user.id)
                                                }})
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.follow(user.id)
                                        .then(data => {
                                                if (data.resultCode === 0) {
                                                    follow(user.id)
                                                }
                                            })
                                    }}>Follow</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users