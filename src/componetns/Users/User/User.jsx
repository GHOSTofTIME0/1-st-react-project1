import React from "react";
import "./User.css";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
import axios from "axios";
import userAva from "../../../IMG/userAva.jpeg"
import { NavLink } from "react-router-dom";
const User = (props) => {

    const follow = (e) => {
        e.preventDefault();

        props.follow(props.user.id);
    }

    const unFollow = (e) => {
        e.preventDefault();

        props.unFollow(props.user.id);
    }

    return (
        <div className="user">
            <NavLink to={'/profile/' + props.user.id}>
                <div className="userText">
                    <div className="userAva">
                        <img src={props.user.photos.small != null ? props.user.photos.small : userAva} alt="" />
                    </div>
                    <div className="userInfo">
                        <h1 className="userName">{props.user.name}</h1>
                        <p className="userDescription">{props.user.description}</p>
                    </div>
                </div>
            </NavLink>
            {props.user.followed === false
                ? <MyBtn onClick={follow}>Подписаться</MyBtn>
                : <MyBtn onClick={unFollow}>Отписаться</MyBtn>
            }
        </div>
    )
}

export default User;