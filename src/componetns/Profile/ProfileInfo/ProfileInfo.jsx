import React from "react";
import "./ProfileInfo.css";
import preloader from "../../../IMG/loading.gif";
import userAva from "../../../IMG/userAva.jpeg";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <img src={preloader} />;
    }

    return (
        <div className='profileInfo'>
            <div className='profileHead'>
                <img src={props.profile.photos.small !== null ? props.profile.photos.large : userAva} alt="" />
                <div className="profileHeadInfo">
                    <h1 className='profileHeadName'>{props.profile.fullName}</h1>
                </div>
            </div>
            <div className="profileDesc">
                {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileInfo;