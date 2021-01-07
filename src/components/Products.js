import React from 'react'
import './Products.css'

const Products = () => {

    const items = [{
        name: "Orange Shirt1",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt2",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt3",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt4",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt5",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt6",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt7",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt8",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt9",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt10",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt11",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt12",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt13",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt14",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt15",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt16",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    }, {
        name: "Orange Shirt17",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    },
    {
        name: "Orange Shirt18",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    },
    {
        name: "Orange Shirt19",
        brand: "No Brand",
        price: "$69.69",
        image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    },
    // {
    //     name: "Orange Shirt20",
    //     brand: "No Brand",
    //     price: "$69.69",
    //     image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
    // },
    ]

    const numbers = []
    for (let i = 0; i < items.length / 5; i++) {
        numbers.push(i)
    }

    const listItem = (num) => {
        let arr = []
        for (let i = 0; i < 5; i++) {
            if (num * 5 + i < items.length) {
                arr.push(num * 5 + i)
            }
        }
        return arr.map((item) =>
            <div className="products--card">
                <img className="products--image" src={items[item].image} />
                <div className="products--name">{items[item].name}</div>
                <div className="products--brand">{items[item].brand}</div>
                <div className="products--price">{items[item].price}</div>
            </div>
        )
    }

    const listItems = numbers.map((index) =>
        <div className="products--card__list">
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