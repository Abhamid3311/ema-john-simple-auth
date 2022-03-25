import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;

    console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    let tax = +(total * 0.1).toFixed(2);
    let grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Cart Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h2>Grand Total: ${grandTotal}</h2>

            <div >
                <button className='btn-remove'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button className='btn-review'>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight} />

                </button>
            </div>

        </div>
    );
};

export default Cart;