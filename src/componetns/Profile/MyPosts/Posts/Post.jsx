import React from "react";
import "./Post.css";

const Post = (props) => {
    return <div className="profilePostItem">
        <img src="https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" alt="" />
        <p>{props.text}</p>
    </div>

}

export default Post;