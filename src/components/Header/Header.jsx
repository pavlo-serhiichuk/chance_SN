import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.headerContent}>
            <div className={s.logo}>Chance</div>
            <div className={s.userInfo}>User Name</div>
            </div>
        </div>
    )
}

export default Header