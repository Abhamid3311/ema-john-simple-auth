import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className='cart-container'>
            <h2>Cart Summary</h2>
            <h3>Selected Item: {props.cart.length}</h3>
        </div>
    );
};

export default Cart;