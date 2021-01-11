import React from 'react'
import './Products.css'
import { useHistory } from "react-router-dom";



const Products = ({ products }) => {
    let history = useHistory();
    const numbers = []
    for (let i = 0; i < products.length / 5; i++) {
        numbers.push(i)
    }
    const listItem = (num) => {
        let arr = []
        for (let i = 0; i < 5; i++) {
            if (num * 5 + i < products.length) {
                arr.push(num * 5 + i)
            }
        }
        return arr.map((item) =>
            <div key={products[item].id} onClick={() => history.push(`/item/${products[item].id}`)} className="products--card">
                <img className="products--image" alt="product" src={products[item].image} />
                <div className="products--name">{products[item].name}</div>
                <div className="products--brand">{products[item].brand}</div>
                <div className="products--price">{products[item].price}</div>
            </div>
        )
    }
    const listItems = numbers.map((index) =>
        <div key={index} className="products--card__list">
            {listItem(index)}
        </div>
    );

    return (
        <div className="products--container">
            <div className="products--sort">
                <div className="products--sort__button">
                    <span style={{ color: "#BEBEBE" }}> Sort by: &nbsp; </span>
                    <span>Recommended &nbsp;</span>
                    <i className='bx bx-chevron-down'></i>
                </div>
            </div>
            {listItems}
        </div>
    )
}

export default Products