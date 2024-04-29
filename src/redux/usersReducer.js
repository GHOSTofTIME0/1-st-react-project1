const SET_USERS = "SET-USERS";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const FOLLOW_USER = "FOLLOW-USER";
const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROGRESS = "SSET_FOLLOWING_IN_PROGRESS";
let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
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
        case SET_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingProgress: action.followingProgress
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default: return newState;
    }
}

export const follow = (userId) => ({ type: FOLLOW_USER, arg1: userId });
export const unFollow = (userId) => ({ type: UNFOLLOW_USER, arg1: userId });
export const showMore = () => ({ type: SHOW_MORE_USERS });
export const setUsers = (users) => ({ type: SET_USERS, arg1: users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount: totalCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setFollowingProgress = (followingProgress, userId) => ({ type: SET_FOLLOWING_IN_PROGRESS, followingProgress, userId });

export default usersReducer;