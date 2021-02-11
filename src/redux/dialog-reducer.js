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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DIALOG_MESSAGE: {
              return {
                ...state,
                messageText: action.newMessageText
            }
        }
        case SEND_MESSAGE: {
           return  {
                ...state,
                messageText: '',
                messages: [...state.messages, {id: Math.random(), message: state.messageText}]
            }
        }
        default:
            return state
    }
}


export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateDialogMessageAC = (newMessageText) => ({type: UPDATE_DIALOG_MESSAGE, newMessageText})

export default dialogsReducer