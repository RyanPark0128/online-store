import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import axios from 'axios'

const Product = () => {
    const [products, setProducts] = useState([])
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/products')
            .then((response) => {
                setProducts(response.data)
                setProductList(response.data)
                setLoading(false)
            });
    },[]);

    return (
        <div className="fade-in-fwd">
            <Navbar style={{position:"relative", zIndex:"inherit 100"}}/>
            <div style={{display:"flex"}}>
                <Filter setProducts={setProducts} productList={productList}/>
                <Products products={products} setProducts={setProducts} loading={loading}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Product