import usersAPI from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IN_FOLLOWING_PROGRESS = "TOGGLE_IN_FOLLOWING_PROGRESS"

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            // debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IN_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(userId => userId !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => (({type: FOLLOW, userId}))
export const unFollowSuccess = (userId) => (({type: UNFOLLOW, userId}))
export const setUsers = (users) => (({type: SET_USERS, users}))
export const setPage = (currentPage) => (({type: SET_CURRENT_PAGE, currentPage}))
export const setTotalUsersCount = (totalCount) => (({type: SET_TOTAL_COUNT, totalCount}))
export const toggleIsFetching = (isFetching) => (({type: TOGGLE_IS_FETCHING, isFetching}))
export const toggleFollowingProgress = (isFetching, userId) => (({type: TOGGLE_IN_FOLLOWING_PROGRESS, isFetching, userId}))

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
            dispatch(toggleIsFetching(false))
        })
}

export const unFollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unFollow(userId)
        .then(data => {
            debugger
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}
export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}
export default usersReducer