import React, { useState, useContext } from 'react'
import './SignupForm.css'
import { useHistory } from "react-router-dom";
import { CognitoContext } from '../context/Cognito'

const SignupForm = () => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const { signup } = useContext(CognitoContext)
    let history = useHistory();

    const onSignup = (event) => {
        event.preventDefault();
        signup(email, password, first, last)
            .then(data => {
                history.push("/")
            })
            .catch(err => {
                setError(err.message)
            })
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSignup(event)
        }
    }

    return (
        <div className="fade-in-fwd">
            <div className="signup--container">
                <div onKeyPress={(event) => handleKeyPress(event)} className="signup--box">
                    <div className="signup--box__title">
                        Create your account
                </div>
                    <div className="signup--row">
                        <div className="signup--input__container">
                            <input value={first} onChange={(e) => setFirst(e.target.value)} className="signup--input" required />
                            <label className="signup--label">
                                <span>First name</span>
                            </label>
                        </div>
                        <div className="signup--input__container">
                            <input value={last} onChange={(e) => setLast(e.target.value)} className="signup--input" required />
                            <label className="signup--label">
                                <span>Last name</span>
                            </label>
                        </div>
                    </div>
                    <div className="signup--row">
                        <div className="signup--input__container">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="signup--input" required />
                            <label className="signup--label">
                                <span>Email</span>
                            </label>
                        </div>
                    </div>
                    <div className="signup--row">
                        <div className="signup--input__container">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" className="signup--input" required />
                            <label className="signup--label">
                                <span>Password</span>
                            </label>
                        </div>
                        <div className="signup--input__container">
                            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="signup--input" required />
                            <label className="signup--label">
                                <span>Confirm</span>
                            </label>
                        </div>
                    </div>
                    <div className={error ? `signup--error` : 'signup--error__hide'}>
                        {error}
                    </div>
                    <div className="signup--row__button">
                        <button onClick={() => history.push("/signin")} className="signup--button__one">
                            Sign in instead
                    </button>
                        <button onClick={(event) => onSignup(event)} className="signup--button__two">
                            Sign up
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm