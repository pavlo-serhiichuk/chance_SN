import React from 'react'
import s from "./Dialogs.module.css";
import DialogItem from "./DialogComponents/DialogItem";


const Dialogs = (props) => {
    const messageText = props.dialogsPage.messageText
    const users = props.dialogsPage.users
    const messages = props.dialogsPage.messages
    const allMessages = messages.map(m => {
            return <div key={m.id}>{m.message}</div>
        })

    const onAddMessage = () => {
        props.addMessage()
    }
    const onMessageChange = (e) => {
        props.messageChange(e.target.value)
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