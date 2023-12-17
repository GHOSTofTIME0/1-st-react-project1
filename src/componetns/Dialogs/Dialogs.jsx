import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    return (
        <div className="dialogsBlock">
            <div className="dialogsItems">

                <DialogItem id="1">Ilya</DialogItem>
                <DialogItem id="2">Dana</DialogItem>
                <DialogItem id="3">Chuvak</DialogItem>
            </div>
            <div className="messages">
                <MessageItem text="Hi!" />
                <MessageItem text="sdafsdr" />
                <MessageItem text="bhrehsdfr" />
            </div>
        </div>
    )
}

export default Dialogs;