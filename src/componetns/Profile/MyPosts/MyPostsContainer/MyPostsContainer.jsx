import MyPosts from "../MyPosts";
import { connect } from "react-redux";
import React from "react";
import { addPost, changeLikesCount, removePost } from "../../../../redux/profileReducer";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        photoPosts: state.profilePage.profile.photos.small,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPost(newPost));
        },
        postMethods: {
            removePost: (id) => { dispatch(removePost(id)); },
            changeLikesCount: (liked, id) => { dispatch(changeLikesCount(liked, id)); }
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;