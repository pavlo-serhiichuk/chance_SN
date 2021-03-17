import React from "react";
import {connect} from "react-redux";
import {
    unFollow, follow,
    setPage,
    setUsers,
    followSuccess,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
} from "../../../redux/users_reducer";
import Users from "./Users";
import BigPreloader from "../../../common/Preloader"
import {compose} from "redux";
import withAuthRedirect from "../../../hoc/withRedirectComponent";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Users onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   isFatching={this.props.isFetching}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}

            />
            {this.props.isFetching ? <BigPreloader/> : null}
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


export default compose(
    connect(mstp, {
        follow, unFollow,
        followSuccess,
        setPage, setUsers,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator,
        toggleIsFetching,
    }),
    withAuthRedirect
)(UsersContainer)


// connect(mstp, {
//     follow, unFollow,
//     followSuccess,
//     setPage, setUsers,
//     toggleFollowingProgress,
//     getUsers: getUsersThunkCreator,
//     toggleIsFetching,
// })(UsersContainer)


// const mdtp = (dispatch) => {
//     return {
//         toggleFollow: (userId, toggleFollow) => dispatch(toggleFollow(userId, toggleFollow)),
//         setUsers: users => dispatch(setUsers(users)),
//         changePage: pageNumber => dispatch(setPage(pageNumber)),
//         setTotalUsersCount: totalCount => dispatch(setTotalUsersCount(totalCount)),
//         toggleIsFetching: isFetching => dispatch(toggleIsFetching(isFetching))
//     }
// }
