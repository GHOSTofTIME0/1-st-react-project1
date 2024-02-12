import React from 'react';
import "./Profile.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer/MyPostsContainer';

const Profile = (props) => {

    return <div>
        <div>
            <img className='profileBG' src='https://bipbap.ru/wp-content/uploads/2018/09/zh.jpg' />
        </div>
        <ProfileInfo />
        <MyPostsContainer />
        {/* <MyPosts posts={props.posts} dispatch={props.dispatch} /> */}
    </div>
}

export default Profile;