import React from 'react'

const Messages = props => {
    return <div>
        {props.messages.map(message => {
            return <div>{message}</div>
        })}
    </div>
}

export default Messages