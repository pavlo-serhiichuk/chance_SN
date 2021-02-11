import {sendMessageAC, updateDialogMessageAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState().dialogsPage
//
//                 const addMessage = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//                 const messageChange = (e) => {
//                     store.dispatch(updateDialogMessageAC(e))
//                 }
//
//                 return <Dialogs addMessage={addMessage}
//                                 messageChange={messageChange}
//                                 state={state}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (body) => {
            dispatch(updateDialogMessageAC(body))
        },
        addMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)