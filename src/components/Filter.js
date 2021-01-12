import React, { useState } from 'react'
import './Filter.css'

const categoriesList = ["t shirt", "shorts", "jeans", "sweater", "shirts"]
const brandList = ["Adidas", "Nike", "Uniclo", "Lacoste", "Under Armor"]
const priceList = ["under $50", "$51 ~ $100", "over $100"]



const Filter = () => {
    const [category, setCategory] = useState("")

    return (
        <div className="filter--container">
            <div className="filter--title__main">
                Filters
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Categories
                </div>
                {categoriesList.map((item, index) =>
                    <div key={index} className="filter--list">
                        <div onClick={()=> setCategory(item)} className={item === category ? "filter--checkbox__selected" : "filter--checkbox"}>
                        </div>
                        <label> {item} </label>
                    </div>
                )}
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Brands
                </div>
                {brandList.map((brand, index) =>
                    <div key={index} className="filter--list">
                        <input className="filter--input" type="checkbox" />
                        <label> {brand} </label>
                    </div>
                )}
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Prices
                </div>
                {priceList.map((price, index) =>
                    <div key={index} className="filter--list">
                        <input className="filter--input" type="checkbox" />
                        <label> {price} </label>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Filter