const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const CHANGE_LIKES_COUNT = "CNANGE-LIKES-COUNT";


const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.arg1.id,
                body: action.arg1.body,
                likesCount: action.arg1.likesCount,
            };
            state.posts.push(newPost);
            return state;
        case REMOVE_POST:
            const updatedPosts = state.posts.filter(post => post.id !== action.arg1);
            state.posts = updatedPosts;
            return state;
        case CHANGE_LIKES_COUNT:
            const posts = state.posts;
            const postIndex = posts.findIndex(post => post.id === action.arg2);

            if (postIndex !== -1) {
                if (action.arg1) posts[postIndex].likesCount += 1;
                else posts[postIndex].likesCount -= 1;
            }
            return state;
        default: return state;
    }


}

export default profileReducer;