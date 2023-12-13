import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
    return (
        <div className='profileInfo'>
            <div className='profileHead'>
                <img src='https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/' />
                <div className="profileHeadInfo">
                    <h1 className='profileHeadName'>Илья Ковтунов</h1>
                </div>
            </div>
            <div className="profileDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolores error commodi, officiis, maiores fugit sunt nemo hic magnam repellendus cumque ipsa? Iste doloribus voluptatem fugiat. Libero deserunt laboriosam ullam.
            </div>
        </div>
    )
}

export default ProfileInfo;