import React from 'react'
import './SignupForm.css'
import { useHistory } from "react-router-dom";

const SignupForm = () => {
    let history = useHistory();
    return (
        <div className="signup--container">
            <div className="signup--box">
                <div className="signup--box__title">
                    Create your account
                </div>
                <div className="signup--row">
                    <div className="signup--input__container">
                        <input className="signup--input" required />
                        <label className="signup--label">
                            <span>First name</span>
                        </label>
                    </div>
                    <div className="signup--input__container">
                        <input className="signup--input" required />
                        <label className="signup--label">
                            <span>Last name</span>
                        </label>
                    </div>
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
                    <div className="signup--input__container">
                        <input className="signup--input" required />
                        <label className="signup--label">
                            <span>Confirm</span>
                        </label>
                    </div>
                </div>
                <div className="signup--row__button">
                    <button onClick={() =>  history.push("/signin")} className="signup--button__one">
                        Sign in instead
                    </button>
                    <button className="signup--button__two">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignupForm