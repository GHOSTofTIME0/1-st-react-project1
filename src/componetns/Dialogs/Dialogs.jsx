import React, { useState } from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    const [dialogsData, setDialogs] = useState(props.dialogsData)

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


                {props.messagesData.length !== 0
                    ?
                    props.messagesData.map(message =>
                        <MessageItem message={message} />
                    )

                    : <div>пустота</div>
                }
            </div>
        </div >
    )
}

export default Dialogs;
