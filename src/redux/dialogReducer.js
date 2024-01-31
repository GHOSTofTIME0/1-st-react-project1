const ADD_MESSAGE = "ADD-MESSAGE";

const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: action.arg1.id,
                message: action.arg1.message,
            };
            state.messagesData.push(newMessage);
            return state;
        default: return state;
    }


}

export default dialogReducer;