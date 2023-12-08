import React from 'react';
import "./Profile.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className='content'>
        <div>
            <img src='https://bipbap.ru/wp-content/uploads/2018/09/zh.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;