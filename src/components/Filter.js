import React from 'react'
import './Filter.css'


const categoriesList = ["t shirt", "shorts", "jeans", "sweater", "shirts"]
const brandList = ["Adidas", "Nike", "Uniclo", "Lacoste", "Under Armor"]
const priceList = ["under $50", "$51 ~ $100", "over $100"]
const Filter = () => {
    return (
        <div className="filter--container">
            <div className="filter--title__main">
                Filters
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Categories
                </div>
                {categoriesList.map((category) =>
                    <div className="filter--list">
                        <input className="filter--input" type="checkbox" />
                        <label> {category} </label>
                    </div>
                )}
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Brands
                </div>
                {brandList.map((brand) =>
                    <div className="filter--list">
                        <input className="filter--input" type="checkbox" />
                        <label> {brand} </label>
                    </div>
                )}
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Prices
                </div>
                {priceList.map((price) =>
                    <div className="filter--list">
                        <input className="filter--input" type="checkbox" />
                        <label> {price} </label>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Filter