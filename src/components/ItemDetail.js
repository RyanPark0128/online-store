import React, { useState, useContext, useEffect } from 'react'
import { CognitoContext } from '../context/Cognito'
import axios from 'axios'
import './ItemDetail.css'

const ItemDetail = ({ item, loading }) => {
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState("")
    const [addLoading, setAddLoading] = useState(false)
    const { user } = useContext(CognitoContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [item])

    if (loading) {
        return (<div>
            <div className="detail--loading">
                <div className="detail--loading__loader"></div>
            </div>
        </div>
        )
    }

    const counter = (operation) => {
        if (!operation) {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleSelected = (size) => {
        if (size === selected) {
            return "detail--box__size--selected"
        } else {
            return "detail--box__size"
        }
    }

    const addToCart = (e) => {
        e.preventDefault()
        if (!selected) {
            alert("Select size for item")
        } else {
            setAddLoading(true)
            if (user) {
                user.getUserAttributes(function(err, result) {
                    if (err) {
                        console.log(err)
                    } else {
                        let email = result[4].getValue()
                        const itemInfo = {
                            id: item.id + selected,
                            name: item.name,
                            brand: item.brand,
                            price: item.price,
                            image: item.image,
                            quantity: quantity,
                            size: selected
                        }
                        axios.post(`https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/carts/${email}`, itemInfo)
                            .then(() => {
                                setAddLoading(false)
                            });
                    }
                });
            } else {
                const cart = JSON.parse(localStorage.getItem('cart'));
                const itemInfo = {
                    id: item.id,
                    name: item.name,
                    brand: item.brand,
                    price: item.price,
                    image: item.image,
                    quantity: quantity,
                    size: selected
                }
                if (!cart) {
                    localStorage.setItem('cart', JSON.stringify([itemInfo]))
                }
                else {
                    cart.push(itemInfo)
                    localStorage.setItem('cart', JSON.stringify(cart))
                }
                setAddLoading(false)
            }
        }
    }
    return (
        <div className="detail--container">
            <div className="fade-in-fwd">
                <div className="detail--box">
                    <img className="detail--box__image" alt="item" src={item.image} />
                    <div className="detail--box__desc">
                        <div className="detail--box__name">{item.name}</div>
                        <div className="detail--box__brand">{item.brand}</div>
                        <div className="detail--box__price">${item.price}</div>
                        <div className="detail--box__select"> SELECT SIZE </div>
                        <div className="detail--box__sizelist">
                            <button onClick={() => setSelected("S")} className={handleSelected("S")}>S</button>
                            <button onClick={() => setSelected("M")} className={handleSelected("M")}>M</button>
                            <button onClick={() => setSelected("L")} className={handleSelected("L")}>L</button>
                            <button onClick={() => setSelected("XL")} className={handleSelected("XL")}>XL</button>
                        </div>
                        <div className='detail--box__operation'>
                            <i onClick={() => counter(false)} className='bx bx-minus detail--box__minus' ></i>
                            <div className='detail--box__quantity'>
                                {quantity}
                            </div>
                            <i onClick={() => counter(true)} className='bx bx-plus detail--box__plus' ></i>
                        </div>
                        <div className="detail--box__info">
                            <div> &middot; 100% Original Products</div>
                            <div> &middot; Free Delivery on order above $50</div>
                            <div> &middot; Easy 30days returns and exchange</div>
                        </div>
                        <button onClick={(e) => addToCart(e)} className="detail--box__cart">
                            {addLoading ? <div className="detail--loading" style={{ height: "10px" }}>
                                <div className="add--loading__loader"></div>
                            </div> : "ADD TO BAG"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail