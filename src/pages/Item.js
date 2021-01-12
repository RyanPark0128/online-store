import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ItemDetail from '../components/ItemDetail'
import { useParams } from "react-router-dom";
import axios from 'axios'

const Item = () => {
    const [item, setItem] = useState({})
    let { id } = useParams();
    const url = `https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/products/${id}`

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setItem(response.data)
            });
    }, [url]);


    return (
        <div>
            <Navbar />
            <ItemDetail item={item}/>
            <Footer />
        </div>
    )
}

export default Item