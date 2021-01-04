import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [ search, setSearch ] = useState(false)

    return (
        <div className="nav--container">
            <img className="nav--logo" src="../Logo.png" alt="logo cloth" />
            <button className="nav--button"> Men </button>
            <button className="nav--button"> Women </button>
            <button className="nav--button"> Accessories </button>
            <div className="nav--icon__container">
                <i onClick={() => setSearch(!search)} className='bx bx-search-alt-2 nav--icons'></i>
                <input className={`nav--search${search ? "" : "__inactive"}`} autoComplete="off" placeholder="Search..."/>
                <i className='bx bxs-cart-alt nav--icons'></i>
                <i className='bx bxs-user nav--icons'></i>
            </div>

        </div>
    )
}

export default Navbar