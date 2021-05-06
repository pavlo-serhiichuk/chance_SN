import React from 'react'
import s from './Users.module.css'
import BigPreloader from "../../../common/Preloader/Preloader";
import {Paginator} from "../../../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount > 20 || 50 / props.pageSize)

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className={s.usersContainer}>
            <Paginator pages={pages}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}/>

            {props.isFetching ? <BigPreloader/> : null}
            {props.users.map(user => {
                return <User user={user}
                             follow={props.follow}
                             unFollow={props.unFollow}
                             followingInProgress={props.followingInProgress}/>
            })}
        </div>
    )
}

export default Users