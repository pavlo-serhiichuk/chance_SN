import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <ul className={s.navigation}>
            <li>
                <NavLink to={'/profile'} className={s.link}>Profile</NavLink>
            </li>
            <li>
                <NavLink to={'/myFriends'} className={s.link}>Friends</NavLink>
            </li>
            <li>
                <NavLink to={'/dialog'} className={s.link}>Dialogs</NavLink>
            </li>
        </ul>
    )
}

export default Navigation