import React from 'react'
import './SigninForm.css'

const SigninForm = () => {
    return (
        <div className="signup--container">
            <div className="signup--box">
                <div className="signup--box__title">
                    Sign in
                </div>
                <div className="signup--row">
                    <div className="signup--input__container">
                        <input className="signup--input" required />
                        <label className="signup--label">
                            <span>Email</span>
                        </label>
                    </div>
                </div>
                <div className="signup--row">
                    <div className="signup--input__container">
                        <input className="signup--input" required />
                        <label className="signup--label">
                            <span>Password</span>
                        </label>
                    </div>
                </div>

                <div className="signup--row__button">
                    <button className="signup--button__one">
                        Create account
                    </button>
                    <button className="signup--button__two">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SigninForm