import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";
import SendInfo from "../../common/SendInfo";
import DialogItem from "./DialogComponents/DialogItem";
import Messages from "./DialogComponents/Messages";

const messages = [];

const Dialog = (props) => {
    return (
        <div className={s.dialogContainer}>
            <div>
                <DialogItem users={props.dialogInfo.users}/>
            </div>
            <div>
                <SendInfo/>
                <Messages messages={props.dialogInfo.messages}/>
            </div>
        </div>
    )
}

export default Dialog