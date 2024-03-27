const SET_USERS = "SET-USERS";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const FOLLOW_USER = "FOLLOW-USER";
const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    let newState = structuredClone(state);
    switch (action.type) {
        case FOLLOW_USER:
            {
                const users = newState.users;
                const userIndex = users.findIndex(user => user.id === action.arg1);

                if (userIndex !== -1) {
                    users[userIndex].followed = true;
                }
                return newState;
            }
        case SHOW_MORE_USERS:
            return newState;
        case UNFOLLOW_USER: {
            const users = newState.users;
            const userIndex = users.findIndex(user => user.id === action.arg1);

            if (userIndex !== -1) {
                users[userIndex].followed = false;
            }
            return newState;
        }
        case SET_USERS: {
            console.log(action.arg1);
            return { ...state, users: action.arg1 };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.totalCount };
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default: return newState;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW_USER, arg1: userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW_USER, arg1: userId });
export const showMoreUsersActionCreator = () => ({ type: SHOW_MORE_USERS });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, arg1: users });
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalCountActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount: totalCount });
export const setIsFetchingActionCreator = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export default usersReducer;