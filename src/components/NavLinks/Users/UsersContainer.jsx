import React from "react";
import {connect} from "react-redux";
import {
    setPage,
    setUsers,
    follow, unFollow,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress
} from "../../../redux/users_reducer";
import Users from "./Users";
import BigPreloader from "../../../common/Preloader"
import usersAPI from "../../../api/api";

class UsersContainer extends React.PureComponent {

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(true)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = pageNumber => {
        this.props.setPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => this.props.setUsers(response.items))
        this.props.toggleIsFetching(false)
    }

    render() {
        return <>
            {/*{this.props.isFetching ? <BigPreloader/> : null}*/}
                 <Users onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unFollow={this.props.unFollow}
                         pageSize={this.props.pageSize}
                        isFatching={this.props.isFetching}
                         currentPage={this.props.currentPage}
                         followingInProgress={this.props.followingInProgress}
                         toggleFollowingProgress={this.props.toggleFollowingProgress}

                />
        </>
    }
}


const mstp = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
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
    follow, unFollow,
    setUsers, setPage,
    toggleFollowingProgress,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)