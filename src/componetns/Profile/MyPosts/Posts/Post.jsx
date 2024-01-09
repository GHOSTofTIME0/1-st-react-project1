import React from "react";
import "./Post.css";
import MyBtn from "../../../../MyTags/MyBtn/MyBtn";

const Post = (props) => {

    let removePost = () => {
        props.remove(props.post)
        props.removePostStateJs(props.post.id)
    }

    return <div className="profilePostItem">
        <div className="profilePostItemContent">
            <img src="https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" alt="" />
            <p>{props.post.body}</p>
            <div className="likeBlock">
                <span className="likeBtn">Like <span className="likesCount">{props.post.likesCount}</span></span>
            </div>
        </div>
        <MyBtn onClick={removePost}>Удалить пост</MyBtn>
    </div>

}

export default Post;