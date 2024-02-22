const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    messagesPage: {
        dialogsData: [{ id: 1, name: "Ilya", imgURL: "https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" },
        { id: 2, name: "Dana", imgURL: "https://i.pinimg.com/736x/b9/e8/53/b9e853e5fd132be955e214395278e6eb.jpg" },
        { id: 3, name: "Chuvak", imgURL: "https://cdna.artstation.com/p/assets/images/images/025/241/080/4k/rienque-leverite-gutsattempt2-corrected.jpg?1585144202" },
        { id: 2, name: "Dana", imgURL: "https://i.pinimg.com/736x/b9/e8/53/b9e853e5fd132be955e214395278e6eb.jpg" },],
        messagesData: [{ id: 1, message: "Hi!" },
        { id: 2, message: "sdafsdr" },
        { id: 3, message: "fdsrfase" },],
    },
}


const dialogReducer = (state = initialState, action) => {

    let newState = structuredClone(state);

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: action.arg1.id,
                message: action.arg1.message,
            };
            newState.messagesPage.messagesData.push(newMessage);
            return newState;
        default: return state;
    }


}

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, arg1: message });

export default dialogReducer;