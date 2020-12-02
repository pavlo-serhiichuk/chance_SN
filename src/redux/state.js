import rerender from "../index";

const state = {
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
            { id: 1, message:"Hello"},
            { id: 2, message:"How are you?"},
            { id: 3, message:"I'm excellent"},
        ],
        messageText: 'gord soboy'
    },
}

export const updatePostText = (newPostText) => {
    state.profileInfo.postText = newPostText
    rerender()

}

export const updateDialogMessage = (newMessageText) => {
    state.dialogInfo.messageText = newMessageText
    rerender()
}

export const addPost = () => {
    let newPost = {
        id: 5,
        likes: 0,
        message: state.profileInfo.postText
    }
    state.profileInfo.posts.unshift(newPost)
    rerender()
}

export const addMessage = () => {
    state.dialogInfo.messages.push({id: 4, message: state.dialogInfo.messageText})
    rerender()
}

export default state