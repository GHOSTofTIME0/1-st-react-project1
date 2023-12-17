import React from "react";
import "./DialogItem.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className="dialog"><NavLink to={"/dialogs/" + props.id}>{props.children}</NavLink></div >
    )
}

export default DialogItem;