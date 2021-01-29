import React from 'react'
import {sendMessageAC, updateDialogMessageAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    const messageText = props.state.dialogPage.messageText
    const users = props.state.dialogPage.users
    const messages = props.state.dialogPage.messages
    const allMessages = messages.map(m => {
            return <div key={m.id}>{m.message}</div>
        })

    const addMessage = () => {
        props.dispatch(sendMessageAC())
        props.dispatch(updateDialogMessageAC(''))
    }
    const messageChange = (e) => {
        props.dispatch(updateDialogMessageAC(e.target.value))
    }

    return (
        <>
            <Dialogs addMessage={addMessage} messageChange={messageChange}/>
        </>
    )
}

export default DialogsContainer