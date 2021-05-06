import React from 'react'
import s from "./Dialogs.module.css";
import DialogItem from "./DialogComponents/DialogItem";
import {Redirect} from "react-router-dom";
import DialogMessage from "./DialogComponents/DialogMessage";


const Dialogs = (props) => {

    const users = props.dialogsPage.users
    const messages = props.dialogsPage.messages
    const allMessages = messages.map(m => {
            return <div key={m.id}>{m.message}</div>
        })

    const onAddMessage = (values) => props.addMessage(values.dialog)


    if(!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogContainer}>
            <div>
                <DialogItem users={users}/>
            </div>
            <div>
                <DialogMessage {...props}   onSubmit={onAddMessage} />
                <div>{allMessages}</div>
                <iframe src="https://facebook.com" frameborder="0" height={'400px'} width={'400px'}></iframe>
            </div>
        </div>
    )
}


export default Dialogs