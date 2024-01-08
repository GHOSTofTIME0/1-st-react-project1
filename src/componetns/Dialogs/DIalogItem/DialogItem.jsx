import React from "react";
import "./DialogItem.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className="dialog">
            <img src={props.dialog.imgURL} className="avatarDialog" />
            <NavLink to={"/dialogs/" + props.dialog.id}>{props.dialog.name}</NavLink>
        </div >
    )
}

export default DialogItem;