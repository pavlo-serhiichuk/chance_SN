import {sendMessageAC, updateDialogMessageAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withRedirectComponent";
import {compose} from "redux";

const mapStateToProps = (state) => ({
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
})
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))