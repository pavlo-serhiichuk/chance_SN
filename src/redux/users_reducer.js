const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
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
        default:
            return state
    }
}

export const toggleFollow = (userId ) => (({type: TOGGLE_FOLLOW, userId}))
export const setUsers = (users) => (({type: SET_USERS, users}))
export const setPage = (currentPage) => (({type: SET_CURRENT_PAGE, currentPage}))
export const setTotalUsersCount = (totalCount) => (({type: SET_TOTAL_COUNT, totalCount}))
export const toggleIsFetching = (isFetching) => (({type: TOGGLE_IS_FETCHING, isFetching}))


export default usersReducer