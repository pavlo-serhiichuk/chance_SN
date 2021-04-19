import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className={s.postField}>
            <textarea
                   {...input}
                   {...props}
                   className={`${hasError && s.textareaField}`}/>
        {meta.error === 'Error'
            ? null
            : hasError && <span className={s.textareaMessage}>{meta.error}</span>}
    </div>
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className={s.postField}>
            <input {...input}
                   {...props}
                   className={`inputForm ${hasError && s.inputField}`}/>
        {meta.error === 'Error'
            ? null
            : hasError && <span className={s.inputMessage}>{meta.error}</span>}
    </div>
}

const FormControl = ({children, input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className={s.postField}>
           {props.children}
    </div>
}

