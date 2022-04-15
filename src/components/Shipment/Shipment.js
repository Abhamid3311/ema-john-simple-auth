import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setname] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handlenameBlur = (e) => {
        setname(e.target.value);
    };
    const handleAddressBlur = e => {
        setAddress(e.target.value);
    };
    const handlePhoneNumberBlur = e => {
        setPhoneNumber(e.target.value);
    };

    const handleCreateUsers = e => {
        e.preventDefault();
        const shipping = { name, address, phoneNumber }
        console.log(shipping);
    };

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-titel'>Shipping Information</h2>
                <form onSubmit={handleCreateUsers}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handlenameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="number" name="phone-number" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

            </div>

        </div>
    );
};

export default Shipment;