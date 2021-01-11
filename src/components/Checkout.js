import React from 'react'
import './Checkout.css'

const data = {
    name: "Orange Shirt19",
    brand: "No Brand",
    price: "$69.69",
    image: "https://3.imimg.com/data3/QS/JK/MY-12149207/plain-orange-t-shirt-500x500.jpg"
}


const Checkout = () => {
    return (
        <div className="checkout--container">
            <div className="checkout--cart__container">
                <div className="checkout--cart__title">
                    MY CART
                </div>
                <div className="checkout--item__container">
                    <img className="checkout--item__image" alt="product" src={data.image} />
                    <div className="checkout--item__desc">
                        <div className="checkout--item__name">
                            {data.name}
                        </div>
                        <div className="checkout--item__brand">
                            {data.brand}
                        </div>
                        <div className="checkout--item__list">
                            <div className="checkout--item__price">
                                {data.price}
                            </div>
                            <div className="checkout--item__select">
                                <div>
                                    Qty&nbsp;:&nbsp;
                                </div>
                                <select name="cars" id="cars">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="checkout--item__remove">
                                Remove
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout--summary__container">
                <div className="checkout--summary__title">
                    Summary
                </div>
                <div className="checkout--summary__subtotal">
                    <div className="checkout--summary__left">Subtotal</div>
                    <div className="checkout--summary__right">$69.69</div>
                </div>
                <div className="checkout--summary__tax">
                    <div className="checkout--summary__left">
                        Taxes
                    </div>
                    <div className="checkout--summary__right">
                        $6.69
                    </div>
                </div>
                <div className="checkout--summary__shipping">
                    <div className="checkout--summary__left">
                        Shipping
                    </div>
                    <div className="checkout--summary__right">
                        $9.99
                    </div>
                </div>
                <div className="checkout--summary__total">
                    <div className="checkout--summary__left">
                        Total
                    </div>
                    <div className="checkout--summary__right">
                        $74.74
                    </div>

                </div>
                <div>
                    <button className="checkout--summary__button">
                        Check out
                    </button>    
                </div>
            </div>
        </div>
    )
}

export default Checkout