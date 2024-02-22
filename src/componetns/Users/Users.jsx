import React from "react";
import User from "./User/User";

const Users = (props) => {
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