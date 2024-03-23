import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, unFollowActionCreator, showMoreUsersActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
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
        setCurrentPage: (currentPage) => { dispath(setCurrentPageActionCreator(currentPage)) },
        setTotalCount: (totalCount) => { dispath(setTotalCountActionCreator(totalCount)) },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

