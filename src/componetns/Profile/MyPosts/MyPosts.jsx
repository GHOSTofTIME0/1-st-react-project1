import React, { useState } from "react";
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";
import PostForm from "./PostForm";

const MyPosts = (props) => {

    const [posts, setPosts] = useState(props.posts)

    const [count, setCount] = useState([posts.length]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }



    return <div><h1 className="myPostsHead">My Posts</h1>
        <PostForm addPost={props.addPost} create={createPost} />
        {posts.length !== 0
            ? <div className="profilePosts">

                {posts.map(post =>
                    <Post post={post} key={Date.now} remove={removePost} removePostStateJs={props.removePost} />
                )}
            </div>

            : <div className="zeroPostsMsg">Посты не найдены :&#10098;</div>
        }
    </div>
}

export default MyPosts;