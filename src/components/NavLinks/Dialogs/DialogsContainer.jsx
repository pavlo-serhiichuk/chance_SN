import {sendMessageAC, updateDialogMessageAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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