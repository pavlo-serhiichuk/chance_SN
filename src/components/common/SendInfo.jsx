import React from "react";
import s from './Common.module.css'

const SendInfo = props => {
    return <form className={s.sendInfo}>
        <input type="text"/>
        <button>Send</button>
    </form>
}

export default SendInfo