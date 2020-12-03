
const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

 const profileReducer = (state, action) => {
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

    return state
}

export const addPostAC = () => (({type: ADD_POST}))
export const updateMessageAC = (newPostText) => (({type: UPDATE_POST_TEXT, newPostText}))

export default profileReducer