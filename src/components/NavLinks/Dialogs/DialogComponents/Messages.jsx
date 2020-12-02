import React from 'react'

const Messages = props => {
    return <div>
        {props.messages.map(m => {
            return <div key={m.id}>{m.message}</div>
        })}
    </div>
}

export default Messages