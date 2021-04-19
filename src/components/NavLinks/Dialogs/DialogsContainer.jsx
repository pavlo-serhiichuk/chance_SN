import {sendMessageAC} from "../../../redux/dialog-reducer";
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
        addMessage: (messageText) => {
            dispatch(sendMessageAC(messageText))
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))