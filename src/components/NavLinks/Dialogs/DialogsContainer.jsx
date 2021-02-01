import React from 'react'
import {sendMessageAC, updateDialogMessageAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../Provider";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogPage

                const addMessage = () => {
                    store.dispatch(sendMessageAC())
                    store.dispatch(updateDialogMessageAC(''))
                }
                const messageChange = (e) => {
                    store.dispatch(updateDialogMessageAC(e))
                }

                return <Dialogs addMessage={addMessage}
                                messageChange={messageChange}
                                state={state}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer