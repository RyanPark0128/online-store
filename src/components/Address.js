import React from 'react'
import './Address.css'

const Address = ({
    setUserInfo,
    first,
    setFirst,
    last,
    setLast,
    email,
    setEmail,
    address1,
    setAddress1,
    address2,
    setAddress2,
    city,
    setCity,
    country,
    setCountry,
    postal,
    setPostal,
    error,
    userEmail,
    userFirst,
    userLast
}) => {
    return <div className="address--container">
        {userEmail ? <div className="address--container__name">
            <div>{`Name : ${userFirst} ${userLast}`}</div>
            <div>{`Email : ${userEmail}`}</div>
        </div>
            :
            <div>
                <div className="address--container__name">
                    <div className="address--name__form">
                        <div className="address--first__container">
                            <input value={first} onChange={(e) => setFirst(e.target.value)} className="address--first__input" required />
                            <label className="address--first__label">First Name</label>
                        </div>
                        <div className="address--first__container">
                            <input value={last} onChange={(e) => setLast(e.target.value)} className="address--first__input" required />
                            <label className="address--first__label">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="address--container__name">
                    <div className="address--email__container">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="address--email__input" required />
                        <label className="address--email__label">Email</label>
                    </div>
                </div>
            </div>}
        <div className="address--container__name">
            <div className="address--email__container">
                <input value={address1} onChange={(e) => setAddress1(e.target.value)} className="address--email__input" required />
                <label className="address--email__label">Address 1</label>
            </div>
        </div>
        <div className="address--container__name">
            <div className="address--email__container">
                <input value={address2} onChange={(e) => setAddress2(e.target.value)} className="address--email__input" required />
                <label className="address--email__label">Address 2</label>
            </div>
        </div>
        <div className="address--container__name">
            <div className="address--detail__form">
                <div className="address--detail__item">
                    <input value={city} onChange={(e) => setCity(e.target.value)} className="address--detail__input" required />
                    <label className="address--detail__label">City</label>
                </div>
                <div className="address--detail__item">
                    <input value={country} onChange={(e) => setCountry(e.target.value)} className="address--detail__input" required />
                    <label className="address--detail__label">Country</label>
                </div>
                <div className="address--detail__item">
                    <input value={postal} onChange={(e) => setPostal(e.target.value)} className="address--detail__input" required />
                    <label className="address--detail__label">Postal Code</label>
                </div>
            </div>
        </div>
        <div>
            {error}
        </div>
        <button className="address--back__button" onClick={() => setUserInfo(false)}>
            {"<"}
        </button>
    </div>

}

export default Address