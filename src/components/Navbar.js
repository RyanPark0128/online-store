import React, { useState, useEffect, useContext } from 'react';
import { CognitoContext } from '../context/Cognito'
import { useHistory } from "react-router-dom";
import './Navbar.css'
import axios from 'axios'

const Navbar = () => {
    const [search, setSearch] = useState(false)
    const [searchList, setSearchList] = useState("")
    const [searchItem, setSearchItem] = useState(false)
    const [searchKey, setSearchKey] = useState("")
    const [searchComplete, setSearchComplete] = useState([])
    const { getSession, logout, user } = useContext(CognitoContext)
    let history = useHistory();


    const toggleSearchIcon = () => {
        if (!search) {
            setSearch(!search)
            if (!searchList) {
                axios.get('https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/products')
                    .then((response) => {
                        setSearchList(response.data)
                    });
            }
        } else {
            setSearch(!search)
            setSearchItem(false)
        }
    }
    useEffect(() => {
        if (searchKey.length > 3) {
            setSearchItem(true)
            let val = searchKey.toLowerCase();
            let arr = []
            for (let i = 0; i < searchList.length; i++) {
                if (searchList[i].name.toLowerCase().includes(val) || searchList[i].brand.toLowerCase().includes(val)) {
                    arr.push(searchList[i])
                }
            }
            arr.splice(3, arr.length)
            setSearchComplete(arr)
        } else {
            setSearchItem(false)
        }

    }, [searchKey])

    useEffect(() => {
        getSession()
    }, [])

    const result = searchComplete.map((item) =>
        <div onClick={()=> history.push(`/item/${item.id}`)} className="search--item__active">
            <img className="search--item__image" src={item.image} />
            <div className="search--item__box">
                <div className="search--item__name">{item.name}</div>
                <div className="search--item__brand">{item.brand}</div>
                <div className="search--item__price">${item.price}</div>
            </div>
        </div>
    );

    return (
        <div className="nav--container">
            <img onClick={() => history.push("/")} className="nav--logo" src="/images/Logo.png" alt="logo cloth" />
            <div className="nav--button__container">
                <button onClick={() => history.push("/product")} className="nav--button"> Men </button>
                <button onClick={() => history.push("/product")} className="nav--button"> Women </button>
                <button onClick={() => history.push("/product")} className="nav--button"> Accessories </button>
                <button onClick={() => console.log(localStorage)} className="nav--button"> Kids </button>
                <button onClick={() => localStorage.clear()} className="nav--button"> Offers </button>
            </div>
            <div className="nav--icon__container">
                <i onClick={() => toggleSearchIcon()} className='bx bx-search-alt-2 nav--icons'></i>
                <div className="nav--search__container">
                    <input spellCheck="false" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} className={`nav--search${search ? "" : "__inactive"}`} autoComplete="off" placeholder="Search..." required />
                    <div className={`nav--search__item${searchItem ? "" : "__inactive"}`}>
                        {result}
                    </div>
                </div>
                <i onClick={() => history.push("/checkout")} className='bx bxs-cart-alt nav--icons'></i>
                {user ? 
                <i onClick={() => logout().then(history.push("/signin"))} className='bx bx-log-in nav--icons'></i>
                :
                <i onClick={() => history.push("/signin")} className='bx bxs-user nav--icons'></i>
                }
            </div>

        </div>
    )
}

export default Navbar