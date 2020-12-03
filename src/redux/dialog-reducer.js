
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE_MESSAGE_TEXT'

const dialogReducer = (state, action) => {
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