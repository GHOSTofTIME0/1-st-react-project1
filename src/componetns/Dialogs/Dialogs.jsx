import React, { useState } from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {

    const [dialogsData, setDialogs] = useState(props.dialogsData);
    const [messagesData, setMessage] = useState(props.messagesData);
    let addMessage = (newMessage) => {
        setMessage([...messagesData, newMessage]);
        console.log(messagesData);
    }

    return (
        <div className="dialogsBlock">

            <div className="dialogsItems">
                {
                    dialogsData.length !== 0
                        ?
                        dialogsData.map(dialog =>
                            <DialogItem dialog={dialog} />
                        )
                        : <div>Пустота</div>
                }
            </div>

            <div className="messages">
                {messagesData.length !== 0
                    ?
                    messagesData.map(message =>
                        <MessageItem message={message} />
                    )

                    : <div>пустота</div>
                }
                <div className="inputMessage">
                    <MessageForm addMessage={addMessage} dispatch={props.dispatch} />
                </div>
            </div>
        </div >
    )
}

export default Dialogs;
