import React from 'react'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div>
        <NavLink to={`/dialog/${props.users.id}`}>
            <div>
                {props.users.map(user => {
                    return <div key={user.id}>{user.name}</div>
                })}
            </div>
        </NavLink>
    </div>
}

export default DialogItem