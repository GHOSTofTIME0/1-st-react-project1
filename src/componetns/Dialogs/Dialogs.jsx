import React, { useState } from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {

    return (
        <div className="dialogsBlock">

            <div className="dialogsItems">
                {
                    props.dialogsData.length !== 0
                        ?
                        props.dialogsData.map(dialog =>
                            <DialogItem dialog={dialog} />
                        )
                        : <div>Пустота</div>
                }
            </div>

            <div className="messages">
                {props.messagesData.length !== 0
                    ?
                    props.messagesData.map(message =>
                        <MessageItem message={message} />
                    )

                    : <div>пустота</div>
                }
                <div className="inputMessage">
                    <MessageForm dispatch={props.dispatch} />
                </div>
            </div>
        </div >
    )
}

export default Dialogs;
