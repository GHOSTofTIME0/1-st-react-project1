import React from "react";
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";

const MyPosts = () => {
    return <div>My Posts
        <div>New post</div>
        <div className="profilePosts">
            <Post text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, " />
            <Post text="Текст" />
        </div>
    </div>
}

export default MyPosts;