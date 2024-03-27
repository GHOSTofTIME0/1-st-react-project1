import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unFollow, showMore, setUsers, setCurrentPage, setTotalCount, setIsFetching } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
    }
}


const UsersContainer = connect(mapStateToProps, { follow, unFollow, setUsers, showMore, setCurrentPage, setTotalCount, setIsFetching })(Users);

export default UsersContainer;

