import React, { useState } from "react";
import "./Post.css";
import MyBtn from "../../../../MyTags/MyBtn/MyBtn";
import Preloader from "../../../Preloader";

const Post = (props) => {
    let removePost = () => {
        props.dispatch.removePost(props.post.id);
    }

    const [liked, setLiked] = useState(true);

    let changeLikesCount = () => { // тута баг. Не отрисовывается изменение лайков
        props.dispatch.changeLikesCount(liked, props.post.id);
        setLiked(!liked);
    }

    if (!props.photoPosts) {
        return <Preloader />
    }

    return <div className="profilePostItem">
        <div className="profilePostItemContent">
            <img src={props.photoPosts} alt="" />
            <p>{props.post.body}</p>
            <div className="likeBlock">
                <button className="likeBtn" onClick={changeLikesCount}> Like <span className="likesCount">{props.post.likesCount}</span></button>
            </div>
        </div>
        <MyBtn onClick={removePost}>Удалить пост</MyBtn>
    </div>

}

export default Post;