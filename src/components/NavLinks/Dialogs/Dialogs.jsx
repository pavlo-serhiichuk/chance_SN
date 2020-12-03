import React from 'react'
import s from "./Dialogs.module.css";
import DialogItem from "./DialogComponents/DialogItem";
import {sendMessageAC, updateDialogMessageAC} from "../../../redux/dialog-reducer";


const Dialogs = (props) => {
    const messageText = props.state.dialogPage.messageText
    const users = props.state.dialogPage.users
    const messages = props.state.dialogPage.messages
    const allMessages = messages.map(m => {
            return <div key={m.id}>{m.message}</div>
        })

    const onAddMessage = () => {
        props.dispatch(sendMessageAC())
        props.dispatch(updateDialogMessageAC(''))
    }
    const onMessageChange = (e) => {
        props.dispatch(updateDialogMessageAC(e.target.value))
    }

    return (
        <div className={s.dialogContainer}>
            <div>
                <DialogItem users={users}/>
            </div>
            <div>
                <div>
                    <input onChange={onMessageChange} type="text"
                           value={messageText}/>
                    <button onClick={onAddMessage} disabled={messageText ? false: true}>Send</button>
                </div>
                <div>{allMessages}</div>
            </div>
        </div>
    )
}

export default Dialogs