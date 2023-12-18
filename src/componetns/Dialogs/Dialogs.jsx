import React, { useState } from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    const [dialogsData, setDialogs] = useState([
        { id: 1, name: "Ilya" },
        { id: 2, name: "Dana" },
        { id: 3, name: "Chuvak" },
        { id: 2, name: "Dana" },
    ])

    let messagesData = [
        { id: 1, message: "Hi!" },
        { id: 2, message: "sdafsdr" },
        { id: 3, message: "fdsrfase" },
    ]

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
            </div>
        </div >
    )
}

export default Dialogs;

{/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogItem>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}></DialogItem>
            <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}></DialogItem> */}