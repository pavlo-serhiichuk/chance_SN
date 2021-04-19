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
    messageText: '' // не обязательное поле
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages,
                    {
                        id: state.messages.length + 1,
                        message: action.messageText
                    }]
            }
        }
        default:
            return state
    }
}


export const sendMessageAC = (messageText) => ({type: SEND_MESSAGE, messageText})

export default dialogsReducer