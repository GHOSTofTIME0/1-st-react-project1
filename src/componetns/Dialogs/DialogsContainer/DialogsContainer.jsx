import { Connect, connect } from "react-redux";
import React from "react";
import { addMessageActionCreator } from "../../../redux/state";
import Dialogs from "../Dialogs";
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogPage.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;