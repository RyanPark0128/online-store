import React, { useState } from 'react'
import './Checkout.css'

const Checkout = () => {
    const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('cart')))
    let sum
    let shipping
    let tax
    let total

    const removeItem = (index) => {
        let updateCarts = carts
        updateCarts.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(updateCarts))
        setCarts(JSON.parse(localStorage.getItem('cart')))
    }

    const handleQuantity = (event, index, operator) => {
        event.preventDefault();
        let updateCarts = carts
        if (!operator) {
            if (updateCarts[index].quantity > 1) {
                updateCarts[index].quantity = updateCarts[index].quantity - 1
                localStorage.setItem('cart', JSON.stringify(updateCarts))
                setCarts(JSON.parse(localStorage.getItem('cart')))
            }
        } else {
            updateCarts[index].quantity = updateCarts[index].quantity + 1
            localStorage.setItem('cart', JSON.stringify(updateCarts))
            setCarts(JSON.parse(localStorage.getItem('cart')))
        }
    }

    const listItems = !carts || carts.length < 1 ? <div>Nothing in the Cart!</div> :
        carts.map((cart, index) =>
            <div key={index} className="checkout--item__container">
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
                                Qty:&nbsp;&nbsp;
                                </div>
                            <i onClick={(event) => handleQuantity(event, index, false)} className='bx bx-minus checkout--item__minus' ></i>
                            <div className='checkout--item__quantity'>
                                {cart.quantity}
                            </div>
                            <i onClick={(event) => handleQuantity(event, index, true)} className='bx bx-plus checkout--item__plus' ></i>
                        </div>
                        <div>
                            Size:&nbsp;{cart.size}
                        </div>
                        <div onClick={() => removeItem(index)} className="checkout--item__remove">
                            Remove
                            </div>
                    </div>
                </div>
            </div>);

    if (!carts || carts.length < 1) {
        shipping = 0
        tax = 0
        total = 0
        sum = 0
    } else {
        sum = 0
        shipping = 9.99
        for (let i = 0; i < carts.length; i++) {
            sum = sum + (carts[i].price * carts[i].quantity)
        }
        tax = sum * 0.07
        total = (Number(tax) + sum + shipping)
    }

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
                    <div className="checkout--summary__right">${sum.toFixed(2)}</div>
                </div>
                <div className="checkout--summary__tax">
                    <div className="checkout--summary__left">
                        Taxes
                    </div>
                    <div className="checkout--summary__right">
                        ${tax.toFixed(2)}
                    </div>
                </div>
                <div className="checkout--summary__shipping">
                    <div className="checkout--summary__left">
                        Shipping
                    </div>
                    <div className="checkout--summary__right">
                        ${shipping.toFixed(2)}
                    </div>
                </div>
                <div className="checkout--summary__total">
                    <div className="checkout--summary__left">
                        Total
                    </div>
                    <div className="checkout--summary__right">
                        ${total.toFixed(2)}
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