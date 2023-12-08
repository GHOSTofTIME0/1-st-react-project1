import React from "react";
import "./MyBtn.css";

const MyBtn = (props) => {
    return <button {...props} className="MyBtn">{props.children}</button>
}

export default MyBtn;