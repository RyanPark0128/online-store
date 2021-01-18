import React, { useState, useEffect } from 'react'
import './Filter.css'

const categoriesList = ["T-Shirt", "Shorts", "Jeans", "Sweater", "Shirts", "Pants", "Jacket", "Hoodie"]
const brandList = ["Adidas", "Nike", "Uniclo", "Lacoste", "Under Armor", "No brand"]
const priceList = [{
    name: "under $50",
    price: [0, 50]
}, {
    name: "$51 ~ $100",
    price: [51, 100]
},
{
    name: "over $100",
    price: [101, 5000]
}]

const Filter = ({ setProducts, productList }) => {
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")

    useEffect(() => {
        let updateCart = productList
        let categoryCart = []
        if (!category) {
            categoryCart = updateCart
        } else {
            for (let i = 0; i < updateCart.length; i++) {
                if (updateCart[i].tag === category) {
                    categoryCart.push(updateCart[i])
                }
            }
        }
        let brandCart = []
        if (!brand) {
            brandCart = categoryCart
        } else {
            for (let i = 0; i < categoryCart.length; i++) {
                if (categoryCart[i].brand === brand) {
                    brandCart.push(categoryCart[i])
                }
            }
        }
        let priceCart = []
        if (!price) {
            priceCart = brandCart
        } else {
            for (let i = 0; i < brandCart.length; i++) {
                if (brandCart[i].price > price[0] && brandCart[i].price < price[1]) {
                    priceCart.push(brandCart[i])
                }
            }
        }
        setProducts(priceCart)
    }, [category, price, brand])

    const handleCategory = (categoryItem) => {
        if (categoryItem === category) {
            setCategory("")
        } else {
            setCategory(categoryItem)
        }
    }

    const handleBrand = (brandItem) => {
        if (brandItem === brand) {
            setBrand("")
        } else {
            setBrand(brandItem)
        }
    }

    const handlePrice = (priceItem) => {
        if (priceItem === price) {
            setPrice("")
        } else {
            setPrice(priceItem)
        }
    }

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
                        <div onClick={() => handleCategory(item)} className={item === category ? "filter--checkbox__selected" : "filter--checkbox"} />
                        <label> {item} </label>
                    </div>
                )}
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Brands
                </div>
                {brandList.map((item, index) =>
                    <div key={index} className="filter--list">
                        <div onClick={() => handleBrand(item)} className={item === brand ? "filter--checkbox__selected" : "filter--checkbox"} />
                        <label> {item} </label>
                    </div>
                )}
            </div>
            <div className="filter--list__container">
                <div className="filter--title">
                    Prices
                </div>
                {priceList.map((item, index) =>
                    <div key={index} className="filter--list">
                        <div onClick={() => handlePrice(item.price)} className={price === item.price ? "filter--checkbox__selected" : "filter--checkbox"}>
                        </div>
                        <label> {item.name} </label>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Filter