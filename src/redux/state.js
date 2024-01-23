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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: action.arg1.id,
                body: action.arg1.body,
                likesCount: action.arg1.likesCount,
            };
            this._state.profilePage.posts.push(newPost);
        }
        else if (action.type === "REMOVE-POST") {
            const updatedPosts = this._state.profilePage.posts.filter(post => post.id !== action.arg1);
            this._state.profilePage.posts = updatedPosts;
        }
        else if (action.type === "CNANGE-LIKES-COUNT") {
            const posts = this.getState().profilePage.posts;
            const postIndex = posts.findIndex(post => post.id === action.arg2);

            if (postIndex !== -1) {
                if (action.arg1) posts[postIndex].likesCount += 1;
                else posts[postIndex].likesCount -= 1;
            }
        }
        else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: action.arg1.id,
                message: action.arg1.message,
            };
            this._state.messagesPage.messagesData.push(newMessage);
            console.log(this._state.messagesPage.messagesData);
        }
    }
}

export default store;




