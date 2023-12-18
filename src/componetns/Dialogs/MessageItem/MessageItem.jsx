import React from "react";
import "./MessageItem.css";

const MessageItem = (props) => {
    return (
        <div className="message">{props.message.message}</div>
    )
}

export default MessageItem;