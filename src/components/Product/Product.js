import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, price, seller, img, ratings } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p style={{ fontSize: '21px', font: 'lato', marginTop: "7px" }}>{name}</p>
                <p style={{ fontSize: '17px' }}>Price: ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} start</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;