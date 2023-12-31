import React, { useState } from "react";
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";
import MyInput from "../../../MyTags/MyInput/MyInput";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
import PostForm from "./PostForm";

const MyPosts = (props) => {

    const [posts, setPosts] = useState(props.posts)

    const [count, setCount] = useState([posts.length]);

    const createPost = (newPost) => {
        console.log(newPost);
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    return <div><h1 className="myPostsHead">My Posts</h1>
        <PostForm create={createPost} />
        {posts.length !== 0
            ? <div className="profilePosts">

                {posts.map(post =>
                    <Post post={post} key={Date.now} remove={removePost} />
                )}
            </div>

            : <div className="zeroPostsMsg">Посты не найдены :&#10098;</div>
        }
    </div>
}

export default MyPosts;