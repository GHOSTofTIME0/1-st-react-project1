import React, { useState } from "react";
import "./PostForm.css";
import MyInput from "../../../MyTags/MyInput/MyInput";
import MyBtn from "../../../MyTags/MyBtn/MyBtn";
import { addPostActionCreator } from "../../../redux/state";
const PostForm = (props) => {

    const [post, setPost] = useState({ body: "" });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(), likesCount: 0,
        }
        props.dispatch(newPost);
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