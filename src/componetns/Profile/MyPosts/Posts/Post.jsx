import React, { useState } from "react";
import "./Post.css";
import MyBtn from "../../../../MyTags/MyBtn/MyBtn";
import { removePostActionCreator, changeLikesCountActionCreator } from "../../../../redux/state";

const Post = (props) => {
    let removePost = () => {
        props.dispatch.removePost(props.post.id);
    }

    const [liked, setLiked] = useState(true);

    let changeLikesCount = () => { // тута баг. Не отрисовывается изменение лайков
        props.dispatch.changeLikesCount(liked, props.post.id);
        setLiked(!liked);
    }

    return <div className="profilePostItem">
        <div className="profilePostItemContent">
            <img src="https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" alt="" />
            <p>{props.post.body}</p>
            <div className="likeBlock">
                <button className="likeBtn" onClick={changeLikesCount}> Like <span className="likesCount">{props.post.likesCount}</span></button>
            </div>
        </div>
        <MyBtn onClick={removePost}>Удалить пост</MyBtn>
    </div>

}

export default Post;