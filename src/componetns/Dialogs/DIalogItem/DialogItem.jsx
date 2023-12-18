import React from "react";
import "./DialogItem.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className="dialog"><NavLink to={"/dialogs/" + props.dialog.id}>{props.dialog.name}</NavLink></div >
    )
}

export default DialogItem;