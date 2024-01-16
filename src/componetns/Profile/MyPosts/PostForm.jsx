import React, { useState } from "react";
import "./PostForm.css";
import MyInput from "../../../MyTags/MyInput/MyInput";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
const PostForm = (props) => {

    const [post, setPost] = useState({ body: "" });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(), likesCount: 0,
        }
        props.create(newPost);
        props.dispatch({ type: "ADD-POST", arg1: newPost });
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