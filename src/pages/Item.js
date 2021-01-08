import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ItemDetail from '../components/ItemDetail'

const Item = () => {
    return (
        <div>
            <Navbar/>
            <ItemDetail/>
            <Footer/>
        </div>
    )
}

export default Item