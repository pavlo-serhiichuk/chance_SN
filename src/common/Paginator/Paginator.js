import s from "./Paginator.module.css";
import React from "react";

export const Paginator = ({pages, currentPage, onPageChanged}) => {
    return (
        <div>
            {pages.map((p, index) => {
                return <span key={index}
                             className={`${currentPage === p && s.selectedPage} ${s.paginator}`}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
        </div>
    )
}