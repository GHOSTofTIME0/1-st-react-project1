import MyPosts from "../MyPosts";
import { connect } from "react-redux";
import React from "react";
import { addPostActionCreator, changeLikesCountActionCreator, removePostActionCreator } from "../../../../redux/state";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        },
        postMethods: {
            removePost: (id) => { dispatch(removePostActionCreator(id)); },
            changeLikesCount: (liked, id) => { dispatch(changeLikesCountActionCreator(liked, id)); }
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;