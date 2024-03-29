import React from "react";
import User from "./User/User";
import axios from "axios";
import "./Users.css";
import Preloader from "../Preloader";
const Users = (props) => {
    if (props.users.length === 0) {
        props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(data => {
                props.setUsers(data.data.items);
                props.setTotalCount(data.data.totalCount);
                props.setIsFetching(false);
            });
    }

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    let changePage = (currentPage) => {
        props.setIsFetching(true);
        props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.pageSize}`)
            .then(data => {
                console.log(data);
                props.setUsers(data.data.items);
                props.setIsFetching(false);
            })
    }

    return (
        <div className="usersBlock">
            {props.isFetching ? <Preloader /> : null}


            <div>
                {slicedPages.map(p =>
                    <span className={props.currentPage == p && "selectedPage"} onClick={() => changePage(p)}>{p}</span>
                )}
            </div>

            {
                props.users.length !== 0
                    ? <div className="usersContainer">
                        {props.users.map(user =>
                            <User user={user} key={Date.now} follow={props.follow} unFollow={props.unFollow} />)}
                    </div>

                    : <div className="zeroUsersMsg">Юзеров нема</div>


            }
        </div >
    )
}

export default Users;