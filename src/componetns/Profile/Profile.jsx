import React from 'react';
import "./Profile.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {

    return <div>
        <div>
            <img className='profileBG' src='https://bipbap.ru/wp-content/uploads/2018/09/zh.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;