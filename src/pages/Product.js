import React from 'react';
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Products from '../components/Products'

const Product = () => {
    return (
        <div>
            <Navbar />
            <div style={{display:"flex"}}>
                <Filter />
                <Products />
            </div>
        </div>
    )
}

export default Product