import React, { useState } from "react";
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";
import PostForm from "./PostForm";

const MyPosts = (props) => {
    return <div><h1 className="myPostsHead">My Posts</h1>
        <PostForm dispatch={props.addPost} />
        {props.posts.length !== 0
            ? <div className="profilePosts">

                {props.posts.map(post =>
                    <Post post={post} key={Date.now} dispatch={props.postMethods} />
                )}
            </div>

            : <div className="zeroPostsMsg">Посты не найдены :&#10098;</div>
        }
    </div>
}

export default MyPosts;