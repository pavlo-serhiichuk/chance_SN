import React from "react";
import {connect} from "react-redux";
import {
    setPage,
    setUsers,
    toggleFollow,
    setTotalUsersCount,
    toggleIsFetching
} from "../../../redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import BigPreloader from "../../../common/Preloader"

class UsersContainer extends React.PureComponent {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count={this.props. pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(true)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false)

            })
    }

    onPageChanged = pageNumber => {
        this.props.setPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count={this.props. pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
        this.props.toggleIsFetching(false)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <BigPreloader/>
                : <Users onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         toggleFollow={this.props.toggleFollow}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}/>
            }
        </>
    }
}


const mstp = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mdtp = (dispatch) => {
//     return {
//         toggleFollow: (userId, toggleFollow) => dispatch(toggleFollow(userId, toggleFollow)),
//         setUsers: users => dispatch(setUsers(users)),
//         changePage: pageNumber => dispatch(setPage(pageNumber)),
//         setTotalUsersCount: totalCount => dispatch(setTotalUsersCount(totalCount)),
//         toggleIsFetching: isFetching => dispatch(toggleIsFetching(isFetching))
//     }
// }

export default connect(mstp, {
    toggleFollow,
    setUsers, setPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)