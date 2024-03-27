import React from 'react';
import "./Profile.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer/MyPostsContainer';
import Preloader from '../Preloader';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return <div>
        <div>
            <img className='profileBG' src={props.profile.photos.large} />
        </div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
        {/* <MyPosts posts={props.posts} dispatch={props.dispatch} /> */}
    </div>
}

export default Profile;