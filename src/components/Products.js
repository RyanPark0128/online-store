import React, { useState, useEffect } from 'react'
import './Products.css'
import { useHistory } from "react-router-dom";

const Products = ({ products, setProducts, loading }) => {
    let history = useHistory();
    const [sort, setSort] = useState("Recommended")
    const [screenWidth, setScreenWidth] = useState(window.screen.width)
    const [itemrow, setItemRow] = useState(4)
    const handleSort = (item) => {
        setSort(item)
        let sorted = products
        function lowToHigh(a, b) {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        }
        function highToLow(a, b) {
            if (a.price > b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        }
        function byName(a, b) {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
        if (item === "Price: High to Low") {
            sorted.sort(highToLow)
        } else if (item === "Price: Low to High") {
            sorted.sort(lowToHigh)
        } else if (item === "Recommended") {
            sorted.sort(byName)
        }
        setProducts(sorted)
    }

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        handleSort(sort)
    }, [products])

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.screen.width)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        if (screenWidth > 600) {
            setItemRow(4)
        } else if (screenWidth < 480){
            setItemRow(1)
        } else {
            setItemRow(2)
        }
    }, [screenWidth])


    if (loading) {
        return <div className="products--loading">
            <div className="products--loading__loader"></div>
        </div>
    }

    const numbers = []
    for (let i = 0; i < products.length / itemrow; i++) {
        numbers.push(i)
    }
    const listItem = (num) => {
        let arr = []
        for (let i = 0; i < itemrow; i++) {
            if (num * itemrow + i < products.length) {
                arr.push(num * itemrow + i)
            }
        }
        return arr.map((item) =>
            <div key={products[item].id} onClick={() => history.push(`/item/${products[item].id}`)} className="products--card">
                <div className="fade-in-fwd">
                    <img className="products--image" alt="product" src={products[item].image} />
                    <div className="products--name">{products[item].name}</div>
                    <div className="products--info__container">
                        <div className="products--brand">{products[item].brand}</div>
                        <div className="products--price">${products[item].price}</div>
                    </div>
                </div>
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
                <div className="products--sort__container">
                    <div className="products--sort__button">
                        <span style={{ color: "#BEBEBE" }}> Sort by: &nbsp; </span>
                        <span>{sort} &nbsp;</span>
                        <i className='bx bx-chevron-down products--sort__icon'></i>
                    </div>
                    <div onClick={() => handleSort("Recommended")} className="products--sort__hidden">
                        <span>Recommended &nbsp;</span>
                    </div>
                    <div onClick={() => handleSort("Price: High to Low")} className="products--sort__hidden products--sort__one">
                        <span>Price: High to Low &nbsp;</span>
                    </div>
                    <div onClick={() => handleSort("Price: Low to High")} className="products--sort__hidden products--sort__two">
                        <span>Price: Low to High &nbsp;</span>
                    </div>
                </div>
            </div>
            {listItems}
        </div>
    )
}

export default Products