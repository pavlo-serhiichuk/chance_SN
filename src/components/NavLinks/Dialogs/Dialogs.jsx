import React from 'react'
import s from "./Dialogs.module.css";
import DialogItem from "./DialogComponents/DialogItem";
import Messages from "./DialogComponents/Messages";


const Dialogs = (props) => {
    const newMessageText = React.createRef()

    const onAddMessage = () => {
        debugger
        props.sendMessageAC()
        props.updateDialogMessageAC('')
    }
    const onMessageChange = () => {
        props.updateDialogMessageAC(newMessageText.current.value)
    }

    return (
        <div className={s.dialogContainer}>
            <div>
                <DialogItem users={props.dialogInfo.users}/>
            </div>
            <div>
                <div>
                    <input onChange={onMessageChange} type="text"
                           ref={newMessageText}
                           value={props.dialogInfo.newMessageText}/>
                    <button onClick={onAddMessage}>Send</button>
                </div>
                <Messages messages={props.dialogInfo.messages}/>
            </div>
        </div>
    )
}

export default Dialogs