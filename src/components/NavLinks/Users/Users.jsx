import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../../images/ava.png'
import {NavLink} from "react-router-dom";
import BigPreloader from "../../../common/Preloader";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount > 20 || 50 / props.pageSize)

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className={s.usersContainer}>
            {pages.map(p => {
                return <span key={Math.random()} className={`${props.currentPage === p && s.selectedPage} ${s.paginator}`}
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
            {props.isFetching ? <BigPreloader/> : null}
            {props.users.map(user => {
                return (
                    <div className={s.userContainer} key={user.id}>
                        <NavLink to={`profile/${user.id}`}>
                            <img src={user.photos.small || userPhoto} alt=""/>
                        </NavLink>
                        <div className={s.userInfo}>
                            <div>{user.name}</div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => props.unFollow(user.id)}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              return props.follow(user.id)} }>Follow</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users