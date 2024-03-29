import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const CHANGE_LIKES_COUNT = "CNANGE-LIKES-COUNT";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [{ id: 1, body: "daseaseaseaee", likesCount: 23 },
            { id: 2, body: "something", likesCount: 10 },
            { id: 3, body: "daseaseaseaee", likesCount: 13 },],
        },
        messagesPage: {
            dialogsData: [{ id: 1, name: "Ilya", imgURL: "https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" },
            { id: 2, name: "Dana", imgURL: "https://i.pinimg.com/736x/b9/e8/53/b9e853e5fd132be955e214395278e6eb.jpg" },
            { id: 3, name: "Chuvak", imgURL: "https://cdna.artstation.com/p/assets/images/images/025/241/080/4k/rienque-leverite-gutsattempt2-corrected.jpg?1585144202" },
            { id: 2, name: "Dana", imgURL: "https://i.pinimg.com/736x/b9/e8/53/b9e853e5fd132be955e214395278e6eb.jpg" },],
            messagesData: [{ id: 1, message: "Hi!" },
            { id: 2, message: "sdafsdr" },
            { id: 3, message: "fdsrfase" },],
        },
    },

    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage.messagesData = dialogReducer(this._state.messagesPage.messagesData, action);
        this._callSubscriber(this._state);
    },

    _callSubscriber() {
        console.log("state changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}




export default store;




