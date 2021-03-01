import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
    return (
        <div className={s.headerContainer}>
            <div className={s.headerContent}>
                <div className={s.logo}>Chance</div>
                {!isAuth
                    ? login
                    : <NavLink to={`/login`} className={s.userInfo}>Login</NavLink>
                }
            </div>
        </div>
    )
}

export default Header