import React from "react";
import "./MyInput.css";

const MyInput = (props) => {
    return <input className="myInput" type="text" {...props} />
}

export default MyInput;