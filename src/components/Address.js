import react from 'react'
import './Address.css'

const Address = ({ setUserInfo }) => {
    // address
    // address 2
    // city
    // country
    // postal code

    return <div className="address--container">
        <div className="address--container__name">
            <div className="address--name__form">
                <div className="address--first__container">
                    <input className="address--first__input" required />
                    <label className="address--first__label">First Name</label>
                </div>
                <div className="address--first__container">
                    <input className="address--first__input" required />
                    <label className="address--first__label">Last Name</label>
                </div>
            </div>
        </div>
        <div className="address--container__name">
            <div className="address--email__container">
                <input className="address--email__input" required />
                <label className="address--email__label">Email</label>
            </div>
        </div>
        <div className="address--container__name">
            <div className="address--email__container">
                <input className="address--email__input" required />
                <label className="address--email__label">Address 1</label>
            </div>
        </div>
        <div className="address--container__name">
            <div className="address--email__container">
                <input className="address--email__input" required />
                <label className="address--email__label">Address 2</label>
            </div>
        </div>
        <div className="address--container__name">
            <div className="address--detail__form">
                <div className="address--detail__item">
                    <input className="address--detail__input" required />
                    <label className="address--detail__label">City</label>
                </div>
                <div className="address--detail__item">
                    <input className="address--detail__input" required />
                    <label className="address--detail__label">Country</label>
                </div>
                <div className="address--detail__item">
                    <input className="address--detail__input" required />
                    <label className="address--detail__label">Postal Code</label>
                </div>
            </div>
        </div>
        <button onClick={() => setUserInfo(false)}>
            back
        </button>
    </div>
}

export default Address