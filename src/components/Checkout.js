import React, { useState, useEffect, useContext } from 'react'
import { CognitoContext } from '../context/Cognito'
import './Checkout.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout'

const Checkout = () => {
    const [carts, setCarts] = useState()
    const { user } = useContext(CognitoContext)
    const [loading, setLoading] = useState(true)
    const [userEmail, setUserEmail] = useState("")
    const [dataRefresh, setDataRefresh] = useState(false)
    const summary = {
        sum: 0,
        shipping: 0,
        tax: 0,
        total: 0
    }
    let history = useHistory();

    useEffect(() => {
        if (user) {
            user.getUserAttributes(function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                    let email = result[4].getValue()
                    axios.get(`https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/carts/${email}`)
                        .then((response) => {
                            setCarts(response.data)
                            setLoading(false)
                            setUserEmail(result[4].getValue())
                        });
                }
            });
        } else {
            setTimeout(function() {
                setLoading(false)
            }, 1500);
            setCarts(JSON.parse(localStorage.getItem('cart')))
        }
    }, [dataRefresh, user])

    const handleToken = () => {
        if (user) {
            user.getUserAttributes(function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                    let email = result[4].getValue()
                    axios.get(`https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/carts/${email}`)
                        .then((response) => {
                            let arr = []
                            for (let i = 0; i < response.data.length; i++) {
                                arr.push(response.data[i].id)
                            }
                            let resetinfo = {
                                email: email,
                                products: arr
                            }
                            axios.post("https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/clear", resetinfo)
                            history.push("/success")
                        });
                }
            });
        } else {
            localStorage.clear();
            history.push("/success")
        }
    }
    const removeItem = (index, id) => {
        if (user) {
            setLoading(true)
            axios.delete(`https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/carts/${userEmail}`, { data: { id: id } })
                .then(() => {
                    setDataRefresh(!dataRefresh)
                })
        } else {
            let updateCarts = carts
            updateCarts.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(updateCarts))
            setCarts(JSON.parse(localStorage.getItem('cart')))
        }
    }

    const handleQuantity = (event, index, operator) => {
        event.preventDefault();
        let updateCarts = carts
        if (!operator) {
            if (updateCarts[index].quantity > 1) {
                setLoading(true)
                if (user) {
                    const itemInfo = {
                        id: updateCarts[index].id,
                        name: updateCarts[index].name,
                        brand: updateCarts[index].brand,
                        price: updateCarts[index].price,
                        image: updateCarts[index].image,
                        quantity: updateCarts[index].quantity - 1,
                        size: updateCarts[index].size
                    }
                    axios.post(`https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/carts/${userEmail}`, itemInfo)
                        .then(() => {
                            setDataRefresh(!dataRefresh)
                        });
                } else {
                    updateCarts[index].quantity = updateCarts[index].quantity - 1
                    localStorage.setItem('cart', JSON.stringify(updateCarts))
                    setCarts(JSON.parse(localStorage.getItem('cart')))
                    setLoading(false)
                }
            }
        } else {
            setLoading(true)
            if (user) {
                const itemInfo = {
                    id: updateCarts[index].id,
                    name: updateCarts[index].name,
                    brand: updateCarts[index].brand,
                    price: updateCarts[index].price,
                    image: updateCarts[index].image,
                    quantity: updateCarts[index].quantity + 1,
                    size: updateCarts[index].size
                }
                axios.post(`https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/carts/${userEmail}`, itemInfo)
                    .then(() => {
                        setDataRefresh(!dataRefresh)
                    });
            } else {
                updateCarts[index].quantity = updateCarts[index].quantity + 1
                localStorage.setItem('cart', JSON.stringify(updateCarts))
                setCarts(JSON.parse(localStorage.getItem('cart')))
                setLoading(false)
            }
        }
    }

    const listItems = !carts || carts.length < 1 ?
        <div className="fade-in-fwd">
            <div className="checkout--empty_container">
                <img className="checkout--empty_container" alt="empty cart" src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png?compress=1&resize=400x300" />
            </div>
            <div className="checkout--empty">
                Cart is empty
        </div>
        </div> :
        carts.map((cart, index) =>
            <div key={index} className="fade-in-fwd">
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
                                ${Number(cart.price)}
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
                            <div className="checkout--item__size">
                                Size:&nbsp;{cart.size}
                            </div>
                            <div onClick={() => removeItem(index, cart.id)} className="checkout--item__remove">
                                Remove
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    if (!carts || carts.length < 1) {

    } else {
        summary.shipping = 9.99
        for (let i = 0; i < carts.length; i++) {
            summary.sum = summary.sum + (carts[i].price * carts[i].quantity)
        }
        summary.tax = summary.sum * 0.07
        summary.total = (Number(summary.tax) + summary.sum + summary.shipping)
    }

    return (
        <div className="checkout--container">
            {loading ? <div className="checkout--loading__cart">
                <div className="detail--loading__loader"></div>
            </div> :
                <div className="checkout--cart__container">
                    <div className="checkout--cart__title">
                        My Cart
                    </div>
                    {listItems}
                </div>}
            <div className="checkout--summary__container">
                <div className="checkout--summary__title">
                    Summary
                </div>
                {loading ? <div className="checkout--loading__summary">
                    <div className="detail--loading__loader"></div>
                </div> :
                    <div className="fade-in-fwd">
                        <div className="checkout--summary__subtotal">
                            <div className="checkout--summary__left">Subtotal</div>
                            <div className="checkout--summary__right">${summary.sum.toFixed(2)}</div>
                        </div>
                        <div className="checkout--summary__fees">
                            <div className="checkout--summary__left">
                                Taxes
                    </div>
                            <div className="checkout--summary__right">
                                ${summary.tax.toFixed(2)}
                            </div>
                        </div>
                        <div className="checkout--summary__fees">
                            <div className="checkout--summary__left">
                                Shipping
                    </div>
                            <div className="checkout--summary__right">
                                ${summary.shipping.toFixed(2)}
                            </div>
                        </div>
                        <div className="checkout--summary__fees">
                            <div className="checkout--summary__left">
                                Total
                    </div>
                            <div className="checkout--summary__right">
                                ${summary.total.toFixed(2)}
                            </div>
                        </div>
                    </div>}
                <div>
                    {!carts || carts.length < 1 || loading ?
                        <button className="checkout--summary__button--inactive">
                            CHECKOUT
                        </button> :
                        <StripeCheckout
                            className="checkout--summary__button"
                            stripeKey='pk_test_TK9R3NMHts3AY8Bdd34iQ5AN002xytpmOT'
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={Number(summary.total) * 100}
                        />
                    }
                </div>
                <div style={{ color: "red" }}>
                    *Attention*
                </div>
                <br />
                <div>
                    The checkout won't charge you since it is on the test mode, but i still recommend using :
                </div>
                <br />
                <div>
                    Card Number :  4242 4242 4242 4242
                </div>
                <div>
                    MM/YY : 0424
                </div>
                <div>
                    CVC : 4242
                </div>
                <br />
                <div>
                    For testing purposes
                </div>
                <br />
                <div>
                    The Checkout Session might take up to 30 seconds to load
                </div>
            </div>
        </div>
    )
}

export default Checkout