import React from 'react'
import './SigninForm.css'

const SigninForm = () => {
    return (
        <div className="signin--container">
            <div className="signin--box">
                <div className="signin--box__title">
                    Sign in
                </div>
                <div className="signin--row">
                    <div className="signin--input__container">
                        <input className="signin--input" required />
                        <label className="signin--label">
                            <span>Email</span>
                        </label>
                    </div>
                </div>
                <div className="signin--row">
                    <div className="signin--input__container">
                        <input className="signin--input" required />
                        <label className="signin--label">
                            <span>Password</span>
                        </label>
                    </div>
                </div>

                <div className="signin--row__button">
                    <button className="signin--button__one">
                        Create account
                    </button>
                    <button className="signin--button__two">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SigninForm