import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import { configureStore } from "@reduxjs/toolkit";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
});

let store = configureStore({ reducer: reducers });

export default store;