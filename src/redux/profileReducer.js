import { act } from "react-dom/test-utils";

const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const CHANGE_LIKES_COUNT = "CNANGE-LIKES-COUNT";

let initialState = {
    posts: [{ id: 1, body: "daseaseaseaee", likesCount: 23 },
    { id: 2, body: "something", likesCount: 10 },
    { id: 3, body: "daseaseaseaee", likesCount: 13 },],
}

const profileReducer = (state = initialState, action) => {
    let newState = structuredClone(state);
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.arg1.id,
                body: action.arg1.body,
                likesCount: action.arg1.likesCount,
            };
            newState.posts.push(newPost);
            return newState;
        case REMOVE_POST:
            const updatedPosts = newState.posts.filter(post => post.id !== action.arg1);
            newState.posts = updatedPosts;
            return newState;
        case CHANGE_LIKES_COUNT:
            const posts = newState.posts;
            const postIndex = posts.findIndex(post => post.id === action.arg2);

            if (postIndex !== -1) {
                if (action.arg1) posts[postIndex].likesCount += 1;
                else posts[postIndex].likesCount -= 1;
            }
            console.log(posts[postIndex].likesCount);
            return newState;
        default: return state;
    }


}

export const addPostActionCreator = (post) => ({ type: ADD_POST, arg1: post });

export const removePostActionCreator = (id) => ({ type: REMOVE_POST, arg1: id });

export const changeLikesCountActionCreator = (isLiked, id) => ({ type: CHANGE_LIKES_COUNT, arg1: isLiked, arg2: id });

export default profileReducer;