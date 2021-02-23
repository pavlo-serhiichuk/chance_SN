import React from 'react'
import preloader from "../images/rolling.svg";
import s from "./Preloaders.module.css";

const BigPreloader = () => {
    return <div className={s.preloader}>
        <img src={preloader} alt="" />
    </div>
}

export default BigPreloader