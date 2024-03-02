import React from "react";
import User from "./User/User";
import axios from "axios";
const Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        debugger;
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(data => props.setUsers(data.data.items));
    }

    return (
        <div className="usersBlock">
            {props.users.length !== 0
                ? <div className="usersContainer">
                    {props.users.map(user =>
                        <User user={user} key={Date.now} dispatch={props.usersMethods} />)}
                </div>

                : <div className="zeroUsersMsg">Юзеров нема</div>
            }
        </div>
    )
}

export default Users;