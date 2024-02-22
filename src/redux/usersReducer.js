

const SET_USERS = "SET-USERS";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const FOLLOW_USER = "FOLLOW-USER";
const SHOW_MORE_USERS = "SHOW-MORE-USERS";
let initialState = {
    users: [
        { id: 1, name: "Ilya K.", description: "something", isFollowed: false, imgURL: "https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" },
        { id: 2, name: "Pavel L.", description: "something", isFollowed: true, imgURL: "https://cdna.artstation.com/p/assets/images/images/025/241/080/4k/rienque-leverite-gutsattempt2-corrected.jpg?1585144202" },
        { id: 3, name: "Dana R.", description: "something", isFollowed: false, imgURL: "https://i.pinimg.com/736x/b9/e8/53/b9e853e5fd132be955e214395278e6eb.jpg" },
    ]
}

const usersReducer = (state = initialState, action) => {
    let newState = structuredClone(state);
    debugger;
    switch (action.type) {
        case FOLLOW_USER:
            {
                const users = newState.users;
                const userIndex = users.findIndex(user => user.id === action.arg1);

                if (userIndex !== -1) {
                    users[userIndex].isFollowed = true;
                }
                return newState;
            }
        case SHOW_MORE_USERS:
            return newState;
        case UNFOLLOW_USER: {
            const users = newState.users;
            const userIndex = users.findIndex(user => user.id === action.arg1);

            if (userIndex !== -1) {
                users[userIndex].isFollowed = false;
            }
            return newState;
        }
        case SET_USERS: {
            return newState.users = action.arg1;
        }
        default: return newState;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW_USER, arg1: userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW_USER, arg1: userId });
export const showMoreUsersActionCreator = () => ({ type: SHOW_MORE_USERS });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, acr1: users });

export default usersReducer;