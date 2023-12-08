import React, { useState } from "react";
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";
import MyInput from "../../../MyTags/MyInput/MyInput";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
import PostForm from "./PostForm";

const MyPosts = () => {

    const [posts, setPosts] = useState([
        { id: 1, body: "daseaseaseaee", likesCount: 23 },
        { id: 2, body: "something", likesCount: 10 },
        { id: 3, body: "daseaseaseaee", likesCount: 13 },
    ])

    const createPost = (newPost) => {
        console.log(newPost);
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    return <div>My Posts
        <PostForm create={createPost} />
        <div className="profilePosts">
            {/* <Post body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, " likesCount="3" />
            <Post body="Текст" likesCount="23" /> */}
            {posts.map(post =>
                <Post post={post} key={Date.now} remove={removePost} />
            )}
        </div>
    </div>
}

export default MyPosts;