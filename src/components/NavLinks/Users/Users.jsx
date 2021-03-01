import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../../images/ava.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = ({users, onPageChanged, toggleFollow, totalCount, pageSize, currentPage}) => {
    let pagesCount = Math.ceil(totalCount > 20 || 50 / pageSize)

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div className={s.usersContainer}>
            {pages.map(p => {
                return <span className={`${currentPage === p && s.selectedPage} ${s.paginator}`}
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
                            <button onClick={() => {
                                if(user.follow) {

                                }
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            toggleFollow(user.id)
                                        }
                                    })

                                        debugger
                                toggleFollow(user.id)
                            }}>
                                {user.followed ? 'UnFollow' : 'Follow'}
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users