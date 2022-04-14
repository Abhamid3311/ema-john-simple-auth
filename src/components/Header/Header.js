import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" srcset="" />
            <div>
                <Link to={'/'}>Shop</Link>
                <Link to={'/orders'}>Order</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/login'}>Login</Link>

            </div>

        </nav>
    );
};

export default Header;