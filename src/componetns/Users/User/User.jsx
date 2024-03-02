import React from "react";
import "./User.css";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
import axios from "axios";
const User = (props) => {

    const follow = (e) => {
        e.preventDefault();

        props.dispatch.follow(props.user.id);
    }

    const unFollow = (e) => {
        e.preventDefault();

        props.dispatch.unFollow(props.user.id);
    }

    return (
        <div className="user">
            <div className="userText">
                <div className="userAva">
                    <img src={props.user.imgURL} alt="" />
                </div>
                <div className="userInfo">
                    <h1 className="userName">{props.user.name}</h1>
                    <p className="userDescription">{props.user.description}</p>
                </div>
            </div>
            {props.user.followed === false
                ? <MyBtn onClick={follow}>Подписаться</MyBtn>
                : <MyBtn onClick={unFollow}>Отписаться</MyBtn>
            }
        </div>
    )
}

export default User;