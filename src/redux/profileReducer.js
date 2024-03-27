const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const CHANGE_LIKES_COUNT = "CNANGE-LIKES-COUNT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
let initialState = {
    posts: [{ id: 1, body: "daseaseaseaee", likesCount: 23 },
    { id: 2, body: "something", likesCount: 10 },
    { id: 3, body: "daseaseaseaee", likesCount: 13 },],
    profile: null,
    isFetching: false,
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
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default: return state;
    }


}

export const addPost = (post) => ({ type: ADD_POST, arg1: post });

export const removePost = (id) => ({ type: REMOVE_POST, arg1: id });

export const changeLikesCount = (isLiked, id) => ({ type: CHANGE_LIKES_COUNT, arg1: isLiked, arg2: id });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export default profileReducer;