import React from "react";
import "./User.css";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
import axios from "axios";
import userAva from "../../../IMG/userAva.jpeg"
import { NavLink } from "react-router-dom";
import { followUser, unFollowUser } from "../../../API/api";
const User = (props) => {

    const follow = (e) => {
        e.preventDefault();
        props.setFollowingProgress(true, props.user.id);
        followUser(props.user.id).then(data => {
            if (data.resultCode === 0) {
                props.follow(props.user.id);
                props.setFollowingProgress(false, props.user.id);
            }
        })

    }

    const unFollow = (e) => {
        props.setFollowingProgress(true, props.user.id);
        e.preventDefault();
        unFollowUser(props.user.id).then(data => {
            if (data.resultCode === 0) {
                props.unFollow(props.user.id);
                props.setFollowingProgress(false, props.user.id);
            }
        })
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
                ? <MyBtn disabled={props.followingProgress.some(id => id === props.user.id)} onClick={follow}>Подписаться</MyBtn>
                : <MyBtn disabled={props.followingProgress.some(id => id === props.user.id)} onClick={unFollow}>Отписаться</MyBtn>
            }
        </div>
    )
}

export default User;