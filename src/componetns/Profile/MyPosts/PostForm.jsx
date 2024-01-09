import React, { useState } from "react";
import "./PostForm.css";
import MyInput from "../../../MyTags/MyInput/MyInput";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
const PostForm = ({ addPost, ...props }) => {

    const [post, setPost] = useState({ body: "" });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(),
        }
        props.create(newPost);
        addPost(newPost);
        setPost({ body: "" });
    }

    return (
        <form action="#" className="createPostForm">
            <MyInput
                type="text"
                placeholder="название поста"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <MyBtn onClick={addNewPost}> Создать пост</MyBtn>
        </form>
    )
}

export default PostForm;