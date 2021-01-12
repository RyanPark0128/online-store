import React from 'react';
import './Items.css'

const Items = ({ data }) => {
    const listItems = data.products.map((product, index) => 
        <div key={index} className="items--card">
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