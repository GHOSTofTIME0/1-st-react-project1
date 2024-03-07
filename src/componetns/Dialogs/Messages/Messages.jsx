import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import MessageForm from "../MessageForm/MessageForm";
import { useParams } from "react-router-dom";

const Messages = (props) => {

    const { dialogId } = useParams();

    return (
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
    )
}

export default Messages;