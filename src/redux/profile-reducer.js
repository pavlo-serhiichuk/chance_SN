import store from "./store";

const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

 const profileReducer = (state, action) => {
     debugger
     switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
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

export const addPostAC = () => (store.dispatch({type: ADD_POST}))
export const updateMessageAC = (newPostText) => (store.dispatch({type: UPDATE_POST_TEXT, newPostText}))

export default profileReducer