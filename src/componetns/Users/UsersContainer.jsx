import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, unFollowActionCreator, showMoreUsersActionCreator, setUsersActionCreator } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        usersMethods: {
            follow: (userId) => { dispath(followActionCreator(userId)) },
            unFollow: (userId) => { dispath(unFollowActionCreator(userId)) },
        },
        setUsers: (users) => { dispath(setUsersActionCreator(users)) },
        showMore: () => { dispath(showMoreUsersActionCreator()) },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

