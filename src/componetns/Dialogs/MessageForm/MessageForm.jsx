import React, { useState } from "react";
import MyInput from "../../../MyTags/MyInput/MyInput";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
import { addMessageActionCreator } from "../../../redux/state";

const MessageForm = (props) => {

    const [message, setMessage] = useState({ message: "" });

    let addNewMessage = (e) => {
        e.preventDefault();

        const newMessage = {
            ...message, id: Date.now(),
        }
        props.addMessage(newMessage);
        props.dispatch(addMessageActionCreator(newMessage));
        setMessage({ message: "" });
    }

    return (
        <form action="#">
            <MyInput
                type="text"
                placeholder="текст сообщения"
                value={message.message}
                onChange={e => setMessage({ ...message, message: e.target.value })}
            />
            <MyBtn onClick={addNewMessage}>Отправить</MyBtn>
        </form>
    )
}

export default MessageForm;