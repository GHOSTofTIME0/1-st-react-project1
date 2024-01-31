import React, { useState } from "react";
import "./Post.css";
import MyBtn from "../../../../MyTags/MyBtn/MyBtn";
import { removePostActionCreator, changeLikesCountActionCreator } from "../../../../redux/state";

const Post = (props) => {

    let removePost = () => {
        props.remove(props.post);
        props.dispatch(removePostActionCreator(props.post.id));
    }

    const [likes, setLike] = useState(props.post.likesCount);
    const [liked, setLiked] = useState(true);

    let changeLikesCount = () => {
        if (liked) {
            setLike(likes + 1);
        }
        else setLike(likes - 1);
        setLiked(!liked);
        props.dispatch(changeLikesCountActionCreator(liked, props.post.id));
    }

    return <div className="profilePostItem">
        <div className="profilePostItemContent">
            <img src="https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" alt="" />
            <p>{props.post.body}</p>
            <div className="likeBlock">
                <button className="likeBtn" onClick={changeLikesCount}> Like <span className="likesCount">{likes}</span></button>
            </div>
        </div>
        <MyBtn onClick={removePost}>Удалить пост</MyBtn>
    </div>

}

export default Post;