import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return <header className='header'>
        <img src='https://images.freeimg.net/rsynced_images/logo-3266214_1280.png' />
        <h1>MY SOCIAL NETWORK</h1>
        <div className="loginBlock">
            <NavLink to={`/login`}>Login</NavLink>
        </div>
    </header>
}

export default Header;