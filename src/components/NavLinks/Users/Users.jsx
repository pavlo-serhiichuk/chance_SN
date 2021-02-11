import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../../utils/images/ava.png'
import * as PropTypes from "prop-types";

class Users extends React.PureComponent {

    constructor(props) {
        super(props);
        // let {users, toggleFollow, totalCount, pageSize, currentPage} = this.props;
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count={this.props. pageSize}`)
            .then(response => {
                 this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = pageNumber => {
        this.props.changePage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count={this.props. pageSize}`)
                .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        // let {users, toggleFollow, totalCount, pageSize, currentPage} = this.props;
        // console.log("Props:", this.props)
        let pagesCount = Math.ceil(this.props.totalCount > 20 && 50/ this.props.pageSize)

        let pages = [];
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1)
        }

        console.log(pages.length)
        return (
            <div className={s.usersContainer}>
                {pages.map(p => {
                    return <span onClick={() => { this.onPageChanged(p) }}
                        className={`${this.props.currentPage === p && s.selectedPage} ${s.paginator}`}>
                        {p}
                    </span>
                })}
                <div>
                    {() => {

                        }}
                </div>
                {this.props.users.map(user => {
                    return (
                        <div className={s.userContainer} key={user.id}>
                            <img src={user.photos.small || userPhoto} alt=""/>
                            <div className={s.userInfo}>
                                <div>{user.name}</div>
                                <button onClick={() => this.props.toggleFollow(user.id)}>
                                    {user.followed ? 'UnFollow' : 'Follow'}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.any,
    toggleFollow: PropTypes.any
}

export default Users