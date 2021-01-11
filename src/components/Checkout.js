import React from 'react'
import './Checkout.css'

const Checkout = () => {

    const carts = JSON.parse(localStorage.getItem('cart'));
    const listItems = carts.map((cart) =>
        <div className="checkout--item__container">
            <img className="checkout--item__image" alt="product" src={cart.image} />
            <div className="checkout--item__desc">
                <div className="checkout--item__name">
                    {cart.name}
                </div>
                <div className="checkout--item__brand">
                    {cart.brand}
                </div>
                <div className="checkout--item__list">
                    <div className="checkout--item__price">
                        ${cart.price}
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
    );

    return (
        <div className="checkout--container">
            <div className="checkout--cart__container">
                <div className="checkout--cart__title">
                    MY CART
                </div>
                {listItems}
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