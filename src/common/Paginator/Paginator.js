import s from "./Paginator.module.css";
import React, {useState} from "react";

export const Paginator = ({currentPage, onPageChanged, totalCount, pageSize}) => {
    let allPagesNumber = Math.ceil(totalCount / pageSize)

    let pages = [];
    for (let i = 0; i < allPagesNumber; i++) {
        pages.push(i + 1)
    }

    let [currentPortionStart, setCurrentPortionStart] = useState(1)
    let [currentPortionEnd, setCurrentPortionEnd] = useState(10)

    let step = 10;

    const decrement = () => {
        setCurrentPortionStart(prev => prev - step)
        setCurrentPortionEnd(prev => prev - step)
        onPageChanged(currentPortionStart - step)
    }

    const increment = () => {
        setCurrentPortionStart(prev => prev + step)
        setCurrentPortionEnd(prev => prev + step)
        onPageChanged(currentPortionStart + step)
    }

    return (
        <div>
            {currentPortionStart > 10 && <button onClick={decrement}>Prev</button>}
            {
                pages
                    .filter(p => p >= currentPortionStart && p <= currentPortionEnd)
                    .map((p, index) => {
                    return <span key={index}
                                 className={`${currentPage === p && s.selectedPage} ${s.paginator}`}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })
            }
            {<button onClick={increment}>Next</button>}
        </div>
    )
}