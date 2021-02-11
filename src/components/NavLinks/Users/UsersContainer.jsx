import Users from "./Users";
import {connect} from "react-redux";
import {setPageAC, setUsersAC, toggleFollowAC, setTotalUsersCountAC} from "../../../redux/users_reducer";

const mstp = (state) => {
    console.log("totalCount", state.usersPage.totalCount)
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

const mdtp = (dispatch) => {
    return {
        toggleFollow: (userId, toggleFollow) => dispatch(toggleFollowAC(userId, toggleFollow)),
        setUsers: users => dispatch(setUsersAC(users)),
        changePage: pageNumber => dispatch(setPageAC(pageNumber)),
        setTotalUsersCount: totalCount => dispatch(setTotalUsersCountAC(totalCount))
    }
}

export default connect(mstp, mdtp)(Users)