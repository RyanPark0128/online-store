import React, { useState, useContext } from 'react'
import './SigninForm.css'
import { CognitoContext } from '../context/Cognito'
import { useHistory } from "react-router-dom";

const SigninForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { authenticate } = useContext(CognitoContext)
    let history = useHistory();

    const handleSignin = (event) => {
        event.preventDefault();
        authenticate(email, password)
        .then(data => {
            console.log("logged in:", data)
            history.push("/")
        })
        .catch(err => {
            console.log("failed to log in:", err)
        })
    }
    return (
        <div className="signin--container">
            <div className="signin--box">
                <div className="signin--box__title">
                    Sign in
                </div>
                <div className="signin--row">
                    <div className="signin--input__container">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="signin--input" required />
                        <label className="signin--label">
                            <span>Email</span>
                        </label>
                    </div>
                </div>
                <div className="signin--row">
                    <div className="signin--input__container">
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="signin--input" required />
                        <label className="signin--label">
                            <span>Password</span>
                        </label>
                    </div>
                </div>
                <div className="signin--row__button">
                    <button onClick={() =>  history.push("/signup")} className="signin--button__one">
                        Create account
                    </button>
                    <button onClick={(e)=> handleSignin(e)}className="signin--button__two">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SigninForm