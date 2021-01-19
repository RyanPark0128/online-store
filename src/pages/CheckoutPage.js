import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Checkout from '../components/Checkout'

const CheckoutPage = () => {
    return (
        <div className="fade-in-fwd">
            <Navbar/>
            <Checkout/>
            <Footer/>
        </div>
    )
}

export default CheckoutPage