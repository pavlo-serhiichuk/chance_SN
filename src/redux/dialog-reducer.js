
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE_MESSAGE_TEXT'

const initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
        switch (action.type) {
            case SEND_MESSAGE:
                state.messages.push({id: Math.random(), message: state.messageText})
                state.messageText = ''
                return state
            case UPDATE_DIALOG_MESSAGE:
                state.messageText = action.newMessageText
                return state
            default:
                return state
        }
}


export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateDialogMessageAC = (newMessageText) => ({type: UPDATE_DIALOG_MESSAGE, newMessageText})

export default dialogReducer