import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    // debugger
    return (
        <div className={s.headerContainer}>
            <div className={s.headerContent}>
                <div className={s.logo}>Chance</div>
                {!!isAuth
                    ? <div className={s.userInfo}>
                        <div className={s.userName}>{login}</div>
                        <button onClick={logout}>Log Out</button>
                    </div>
                    : <NavLink to={`/login`} className={s.userInfo}>Login</NavLink>
                }
            </div>
        </div>
    )
}

export default Header