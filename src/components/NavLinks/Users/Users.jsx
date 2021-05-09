import React from 'react'
import s from './Users.module.css'
import BigPreloader from "../../../common/Preloader/Preloader";
import {Paginator} from "../../../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div className={s.usersContainer}>
            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}/>

            {props.isFetching ? <BigPreloader/> : null}
            {props.users.map(user => {
                return <User user={user}
                             key={user.id || Math.random()}
                             follow={props.follow}
                             unFollow={props.unFollow}
                             followingInProgress={props.followingInProgress}/>
            })}
        </div>
    )
}

export default Users