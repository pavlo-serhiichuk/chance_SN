
const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

const initialState = {
        posts: [
            {id: 1, message: 'Glad to see everyone', likes: 0},
            {id: 2, message: 'Glad to see you', likes: 3},
            {id: 3, message: 'Glad to see everyone', likes: 5},
        ],
        postText: 'sd',
}

 const profileReducer = (state = initialState, action) => {
     switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: Math.random(),
                    likes: 0,
                    message: state.postText
                }
                state.posts.unshift(newPost)
                state.newPostText = ''
                return state

            case UPDATE_POST_TEXT:
                state.postText = action.newPostText
                return state
            default:
                return state
        }
}

export const addPostAC = () => (({type: ADD_POST}))
export const updatePostMessageAC = (newPostText) => (({type: UPDATE_POST_TEXT, newPostText}))

export default profileReducer