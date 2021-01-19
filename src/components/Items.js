import React from 'react';
import './Items.css'
import { useHistory } from "react-router-dom";


const Items = ({ data }) => {
    let history = useHistory();

    const listItems = data.products.map((product, index) => 
        <div onClick={() => history.push("/product")} key={index} className="items--card">
            <img className="items--card__image" alt="products" src={product.img}/>
            <p>{product.name}</p>
        </div>
    )
    return (
        <div className="items--container">
            <div className="items--title">
                {data.title}
            </div>
            <div className="items--list">
                {listItems}
            </div>
        </div>
    )
}

export default Items