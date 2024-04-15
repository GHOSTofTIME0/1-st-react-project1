import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: usersReducer,
    auth: authReducer,
});

let store = configureStore({ reducer: reducers });

window.store = store;

export default store;