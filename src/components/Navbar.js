import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const [ search, setSearch ] = useState(false)
    let history = useHistory();

    return (
        <div className="nav--container">
            <img onClick={() => history.push("/")} className="nav--logo" src="images/Logo.png" alt="logo cloth" />
            <div className="nav--button__container">
                <button onClick={() => history.push("/product")} className="nav--button"> Men </button>
                <button onClick={() => history.push("/product")} className="nav--button"> Women </button>
                <button onClick={() => history.push("/product")} className="nav--button"> Accessories </button>
                <button onClick={() => history.push("/product")} className="nav--button"> Kids </button>
                <button onClick={() => localStorage.clear()} className="nav--button"> Offers </button>
            </div>
            <div className="nav--icon__container">
                <i onClick={() => setSearch(!search)} className='bx bx-search-alt-2 nav--icons'></i>
                <input className={`nav--search${search ? "" : "__inactive"}`} autoComplete="off" placeholder="Search..."/>
                <i onClick={() => history.push("/checkout")} className='bx bxs-cart-alt nav--icons'></i>
                <i onClick={() => history.push("/signin")} className='bx bxs-user nav--icons'></i>
            </div>

        </div>
    )
}

export default Navbar