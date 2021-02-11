const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export const toggleFollowAC = (userId ) => (({type: TOGGLE_FOLLOW, userId}))
export const setUsersAC = (users) => (({type: SET_USERS, users}))
export const setPageAC = (currentPage) => (({type: SET_CURRENT_PAGE, currentPage}))
export const setTotalUsersCountAC = (totalCount) => (({type: SET_TOTAL_COUNT, totalCount}))


export default usersReducer