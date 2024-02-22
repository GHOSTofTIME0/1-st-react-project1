import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className='nav'>
        <ul>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/dialogs'>Messages</NavLink></li>
            <li><NavLink to='/news'>News</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><a href='#'>Music</a></li>
            <li><a href='#'>Settings</a></li>
        </ul>
    </nav>
}

export default Navbar;