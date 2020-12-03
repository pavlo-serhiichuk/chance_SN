import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

const store = {
    subscribe(observer) {
        this._rerender = observer
    },
    _rerender() {
        console.log('rerender')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Glad to see everyone', likes: 0},
                {id: 2, message: 'Glad to see you', likes: 3},
                {id: 3, message: 'Glad to see everyone', likes: 5},
            ],
            postText: 'sd',
        },
        dialogPage:  {
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

            this._state.profileInfo = profileReducer(this._state.profileInfo, action );
            this._state.dialogInfo = dialogReducer(this._state.dialogInfo, action );

            this._rerender(this._state);
        }
}


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

