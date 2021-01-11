import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import axios from 'axios'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/products')
            .then((response) => {
                setProducts(response.data)
            });
    });

    return (
        <div>
            <Navbar />
            <div style={{display:"flex"}}>
                <Filter />
                <Products products={products}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Product