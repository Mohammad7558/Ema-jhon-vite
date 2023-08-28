import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/inventory">Inventory</a></li>
            </ul>
        </div>
    );
};

export default Header;