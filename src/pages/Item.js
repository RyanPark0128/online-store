import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ItemDetail from '../components/ItemDetail'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Item = () => {
    let history = useHistory();
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    let { id } = useParams();
    const url = `https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/products/${id}`

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                if (response.data.errorMessage) {
                    history.push("/product")
                } else {
                    setItem(response.data)
                    setLoading(false)
                }
            });
    }, [url]);


    return (
        <div>
            <Navbar />
            <ItemDetail item={item} loading={loading}/>
            <Footer />
        </div>
    )
}

export default Item