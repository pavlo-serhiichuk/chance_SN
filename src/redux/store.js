const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE_MESSAGE_TEXT'

const store = {
    subscribe(observer) {
        this._rerender = observer
    },
    _rerender() {
        console.log('rerender')
    },
    _state: {
        profileInfo: {
            posts: [
                {id: 1, message: 'Glad to see everyone', likes: 0},
                {id: 2, message: 'Glad to see you', likes: 3},
                {id: 3, message: 'Glad to see everyone', likes: 5},
            ],
            postText: 'gord soboy',
        },
        dialogInfo: {
            users: [
                {id: 1, name: 'Elena'},
                {id: 2, name: 'Igor'},
                {id: 3, name: 'Paul'}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I'm excellent"},
            ],
            messageText: 'gord soboy'
        },
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    likes: 0,
                    message: this._state.profileInfo.postText
                }
                this._state.profileInfo.posts.unshift(newPost)
                this._rerender(this._state);

            case UPDATE_POST_TEXT:
                this._state.profileInfo.postText = action.newPostText
                this._rerender(this._state);
            case SEND_MESSAGE:
                this._state.dialogInfo.messages.push({id: 4, message: this._state.dialogInfo.messageText})
                this._rerender(this._state)
            case UPDATE_DIALOG_MESSAGE:
                this._state.dialogInfo.messageText = action.newMessageText
                this._rerender(this._state)
            default:
                return this._state
        }
    }
}

export const addPostAC = () => (store.dispatch({type: ADD_POST}))
export const updateMessageAC = (newPostText) => (store.dispatch({type: UPDATE_POST_TEXT, newPostText}))
export const sendMessageAC = () => (store.dispatch({type: SEND_MESSAGE}))
export const updateDialogMessageAC = (newMessageText) => (store.dispatch({type: UPDATE_DIALOG_MESSAGE, newMessageText}))

export default store

// const store = {
//     profileInfo: {
//         posts: [
//             {id: 1, message: 'Glad to see everyone', likes: 0},
//             {id: 2, message: 'Glad to see you', likes: 3},
//             {id: 3, message: 'Glad to see everyone', likes: 5},
//         ],
//         postText: 'gord soboy',
//     },
//     dialogInfo: {
//         users: [
//             {id: 1, name: 'Elena'},
//             {id: 2, name: 'Igor'},
//             {id: 3, name: 'Paul'}
//         ],
//         messages: [
//             { id: 1, message:"Hello"},
//             { id: 2, message:"How are you?"},
//             { id: 3, message:"I'm excellent"},
//         ],
//         messageText: 'gord soboy'
//     },
// }

// addPost() {
//     let newPost = {
//         id: 5,
//         likes: 0,
//         message: this._state.profileInfo.postText
//     }
//     this._state.profileInfo.posts.unshift(newPost)
//     this._rerender(this._state)
// },
// updatePostText(newPostText) {
//     this._state.profileInfo.postText = newPostText
//     this._rerender(this._state)
//
// },
// addMessage() {
//     this._state.dialogInfo.messages.push({id: 4, message: this._state.dialogInfo.messageText})
//     this._rerender(this._state)
//
// },
// updateDialogMessage(newMessageText) {
//     this._state.dialogInfo.messageText = newMessageText
//     this._rerender(this._state)
//
// },

