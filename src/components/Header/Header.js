import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import { signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" srcset="" />
            <div>
                <Link to={'/'}>Shop</Link>
                <Link to={'/orders'}>Order</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={'/about'}>About</Link>
                {user
                    ?
                    <button onClick={() => signOut(auth)}>Sign Out</button>
                    :
                    <Link to={'/login'}>Login</Link>
                }

            </div>

        </nav>
    );
};

export default Header;