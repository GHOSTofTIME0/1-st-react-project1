import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import { configureStore } from "@reduxjs/toolkit";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: usersReducer,
});

let store = configureStore({ reducer: reducers });


export default store;