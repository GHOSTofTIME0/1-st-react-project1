import React, { useState } from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import Messages from "./Messages/Messages";
const Dialogs = (props) => {
    return (
        <div className="dialogsBlock">

            <div className="dialogsItems">
                {
                    props.dialogsPage.dialogsData.length !== 0
                        ?
                        props.dialogsPage.dialogsData.map(dialog =>
                            <DialogItem dialog={dialog} />
                        )
                        : <div>Пустота</div>
                }
            </div>

            <Messages messagesData={props.dialogsPage.messagesData} dispatch={props.addMessage} />
        </div >
    )
}

export default Dialogs;
