import React from 'react'
import './ItemDetail.css'

const data = {
    name: "Orange Shirt19",
    brand: "No Brand",
    price: "$69.69",
    image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
}


const ItemDetail = ({ item }) => {
    return (
        <div className="detail--container">
            <div>
                {/* <i class='bx bx-left-arrow' ></i>
                <span style={{fontSize:'18px'}}>Back</span> */}
            </div>
            <div className="detail--box">
                <img className="detail--box__image" src={item.image} />
                <div className="detail--box__desc">
                    <div className="detail--box__name">{item.name}</div>
                    <div className="detail--box__brand">{item.brand}</div>
                    <div className="detail--box__price">{item.price}</div>
                    <div className="detail--box__select"> SELECT SIZE </div>
                    <div className="detail--box__sizelist">
                        <button className="detail--box__size">S</button>
                        <button className="detail--box__size">M</button>
                        <button className="detail--box__size">L</button>
                        <button className="detail--box__size">XL</button>
                    </div>
                    <div className="detail--box__info">
                        <div> &middot; 100% Original Products</div>
                        <div> &middot; Free Delivery on order above $50</div>
                        <div> &middot; Easy 30days returns and exchange</div>
                    </div>
                    <button className="detail--box__cart">
                        ADD TO BAG
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail